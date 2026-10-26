var dataKamar = [
  {
    id_kamar: 1,
    nomor_kamar: "101",
    tipe: "Standar",
    harga_sewa: 700000,
    kapasitas: 1,
    fasilitas: "Kasur, Lemari, Meja belajar, Kamar mandi luar, Kipas angin",
    foto: "img/kamar-standar.jpg",
    status: "kosong",
  },

  {
    id_kamar: 2,
    nomor_kamar: "102",
    tipe: "Standar",
    harga_sewa: 750000,
    kapasitas: 1,
    fasilitas:
      "Kasur, Lemari, Meja belajar, Kamar mandi luar, Kipas angin, Jendela besar",
    foto: "img/kamar-standar.jpg",
    status: "kosong",
  },

  {
    id_kamar: 3,
    nomor_kamar: "103",
    tipe: "Standar",
    harga_sewa: 700000,
    kapasitas: 1,
    fasilitas: "Kasur, Lemari, Meja belajar, Kamar mandi luar, Kipas angin",
    foto: "img/kamar-standar.jpg",
    status: "terisi",
  },

  {
    id_kamar: 4,
    nomor_kamar: "201",
    tipe: "Deluxe",
    harga_sewa: 1000000,
    kapasitas: 1,
    fasilitas: "AC, Kasur, Lemari, Meja belajar, Kamar mandi dalam, Wi-Fi",
    foto: "img/kamar-deluxe.jpg",
    status: "kosong",
  },

  {
    id_kamar: 5,
    nomor_kamar: "202",
    tipe: "Deluxe",
    harga_sewa: 1050000,
    kapasitas: 2,
    fasilitas:
      "AC, Kasur ukuran besar, Lemari, Meja belajar, Kamar mandi dalam, Wi-Fi",
    foto: "img/kamar-deluxe.jpg",
    status: "kosong",
  },

  {
    id_kamar: 6,
    nomor_kamar: "203",
    tipe: "Deluxe",
    harga_sewa: 1000000,
    kapasitas: 1,
    fasilitas: "AC, Kasur, Lemari, Meja belajar, Kamar mandi dalam, Wi-Fi",
    foto: "img/kamar-deluxe.jpg",
    status: "terisi",
  },

  {
    id_kamar: 7,
    nomor_kamar: "301",
    tipe: "VIP",
    harga_sewa: 1400000,
    kapasitas: 2,
    fasilitas:
      "AC, Kasur ukuran besar, Lemari besar, Meja kerja, Kamar mandi dalam, Water heater, Wi-Fi, Balkon",
    foto: "img/kamar-vip.jpg",
    status: "kosong",
  },

  {
    id_kamar: 8,
    nomor_kamar: "302",
    tipe: "VIP",
    harga_sewa: 1450000,
    kapasitas: 2,
    fasilitas:
      "AC, Kasur ukuran besar, Lemari besar, Meja kerja, Kamar mandi dalam, Water heater, Wi-Fi, TV",
    foto: "img/kamar-vip.jpg",
    status: "kosong",
  },
];

function initKamar() {
  $(document).off(".kamar");

  $(document)
    .on(
      "input.kamar change.kamar",
      "#cariKamar, #filterTipe, #filterHarga, #urutKamar",
      terapkanFilter,
    )

    .on("click.kamar", "#resetFilter", function () {
      $("#cariKamar").val("");
      $("#filterTipe").val("");
      $("#filterHarga").val(1500000);
      $("#urutKamar").val("");
      terapkanFilter();
    })

    .on("click.kamar", ".btn-detail", function () {
      bukaModal($(this).data("id"));
    })

    .on("click.kamar", "#tutupModal", tutupModal)
    .on("click.kamar", "#modalKamar", function (e) {
      if (e.target === this) {
        tutupModal();
      }
    })
    .on("keydown.kamar", function (e) {
      if (e.key === "Escape") {
        tutupModal();
      }
    });

  terapkanFilter();
}

function terapkanFilter() {
  var tipe = $("#filterTipe").val();
  var hargaMax = Number($("#filterHarga").val());
  var kata = $("#cariKamar").val().toLowerCase().trim();
  var urut = $("#urutKamar").val();

  $("#labelHarga").text(rupiah(hargaMax));

  var hasil = dataKamar.filter(function (k) {
    var cocokTipe = tipe === "" || k.tipe === tipe;
    var cocokHarga = k.harga_sewa <= hargaMax;
    var cocokKata =
      kata === "" ||
      k.nomor_kamar.toLowerCase().includes(kata) ||
      k.fasilitas.toLowerCase().includes(kata);
    return k.status === "kosong" && cocokTipe && cocokHarga && cocokKata;
  });

  if (urut === "murah") {
    hasil.sort(function (a, b) {
      return a.harga_sewa - b.harga_sewa;
    });
  } else if (urut === "mahal") {
    hasil.sort(function (a, b) {
      return b.harga_sewa - a.harga_sewa;
    });
  }

  tampilKamar(hasil);
}

function rupiah(angka) {
  return "Rp " + Number(angka).toLocaleString("id-ID");
}

function tampilKamar(daftar) {
  var html = "";

  if (daftar.length === 0) {
    html =
      '<p class="pesan">Tidak ada kamar yang sesuai. Coba ubah filter atau kata pencarian.</p>';
  }

  $.each(daftar, function (i, k) {
    html += `
      <article class="kartu-kamar">
        <img src="${k.foto}" alt="Kamar ${k.nomor_kamar} tipe ${k.tipe}" loading="lazy">
        <div class="isi">
          <span class="tipe">${k.tipe}</span>
          <h3>Kamar ${k.nomor_kamar}</h3>
          <p class="harga">${rupiah(k.harga_sewa)} <small>/ bulan</small></p>
          <p class="fasilitas">${k.fasilitas}</p>
          <button type="button" class="btn-detail" data-id="${k.id_kamar}">Detail</button>
        </div>
      </article>`;
  });

  $("#daftarKamar").html(html);
  $("#jumlahKamar").text("Menampilkan " + daftar.length + " kamar");
}

function bukaModal(id) {
  var k = dataKamar.find(function (x) {
    return x.id_kamar === id;
  });

  var daftarFasilitas = k.fasilitas
    .split(", ")
    .map(function (f) {
      return "<li>" + f + "</li>";
    })
    .join("");

  $("#modalIsi").html(`
    <img src="${k.foto}" alt="Kamar ${k.nomor_kamar}" class="modal-foto">
    <span class="tipe">${k.tipe}</span>
    <h3 id="modalJudul">Kamar ${k.nomor_kamar}</h3>
    <p class="harga">${rupiah(k.harga_sewa)} <small>/ bulan</small></p>
    <p><strong>Kapasitas:</strong> ${k.kapasitas} orang</p>
    <p><strong>Fasilitas:</strong></p>
    <ul class="list-fasilitas">${daftarFasilitas}</ul>
    <p class="catatan">Tertarik? Hubungi pemilik di 08123456789.</p>
  `);

  $("#modalKamar").prop("hidden", false);
}

function tutupModal() {
  $("#modalKamar").prop("hidden", true);
}
