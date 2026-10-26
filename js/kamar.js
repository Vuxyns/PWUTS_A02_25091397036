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
  var kosong = dataKamar.filter(function (k) {
    return k.status === "kosong";
  });
  tampilKamar(kosong);
}

function rupiah(angka) {
  return "Rp " + Number(angka).toLocaleString("id-ID");
}

function tampilKamar(daftar) {
  var html = "";

  $.each(daftar, function (i, k) {
    html += `
      <article class="kartu-kamar">
        <img src="${k.foto}" alt="Kamar ${k.nomor_kamar} tipe ${k.tipe}" loading="lazy">
        <div class="isi">
          <span class="tipe">${k.tipe}</span>
          <h3>Kamar ${k.nomor_kamar}</h3>
          <p class="harga">${rupiah(k.harga_sewa)} <small>/ bulan</small></p>
          <p class="fasilitas">${k.fasilitas}</p>
        </div>
      </article>`;
  });

  $("#daftarKamar").html(html);
  $("#jumlahKamar").text("Menampilkan " + daftar.length + " kamar");
}
