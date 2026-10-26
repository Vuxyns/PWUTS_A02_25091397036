$(function () {
  $("#navToggle").on("click", function () {
    var $menu = $("#navMenu");
    var buka = !$menu.hasClass("open");

    $menu.toggleClass("open", buka);
    $(this).attr({
      "aria-expanded": String(buka),
      "aria-label": buka ? "Tutup menu" : "Buka menu",
    });
  });
});
