$(function () {
  var $beranda = $("#beranda");
  var $konten = $("#konten");
  var $menu = $("#navMenu");
  var $toggle = $("#navToggle");

  var halaman = {
    kamar: {
      url: "halaman/kamar.html",
      script: "js/kamar.js",
      init: "initKamar",
    },
    login: { url: "halaman/login.html" },
  };

  function tutupMenu() {
    $menu.removeClass("open");
    $toggle.attr({ "aria-expanded": "false", "aria-label": "Buka menu" });
  }

  $toggle.on("click", function () {
    var buka = !$menu.hasClass("open");
    $menu.toggleClass("open", buka);
    $toggle.attr({
      "aria-expanded": String(buka),
      "aria-label": buka ? "Tutup menu" : "Buka menu",
    });
  });

  function tampilkan(nama) {
    if (nama !== "beranda" && !halaman[nama]) {
      nama = "beranda";
    }

    $menu.find("a").removeClass("active");
    $menu.find('a[data-page="' + nama + '"]').addClass("active");
    tutupMenu();

    if (nama === "beranda") {
      $konten.prop("hidden", true).empty();
      $beranda.prop("hidden", false);
      return;
    }

    $beranda.prop("hidden", true);
    $konten.prop("hidden", false).html("<p>Memuat halaman...</p>");

    var h = halaman[nama];

    $konten.load(h.url, function (respon, status) {
      if (status === "error") {
        $konten.html(
          "<p>Halaman gagal dimuat. Jalankan lewat Live Server, bukan dengan membuka file langsung.</p>",
        );
        return;
      }
      if (h.script) {
        $.getScript(h.script).done(function () {
          window[h.init]();
        });
      }
    });
  }

  $(document).on("click", "a[data-page]", function (e) {
    e.preventDefault();
    var nama = $(this).data("page");
    history.pushState(null, "", "#" + nama);
    tampilkan(nama);
    window.scrollTo(0, 0);
  });

  $(window).on("popstate", function () {
    tampilkan(location.hash.replace("#", "") || "beranda");
  });

  tampilkan(location.hash.replace("#", "") || "beranda");
});
