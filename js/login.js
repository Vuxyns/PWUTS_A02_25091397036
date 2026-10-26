var akunContoh = [
  {
    nama: "Budi Santoso",
    email: "budi@kosabah.com",
    password: "penghuni123",
    role: "Penghuni",
  },
  {
    nama: "Siti Rahma",
    email: "siti@kosabah.com",
    password: "penghuni456",
    role: "Penghuni",
  },
];

function initLogin() {
  $(document).off(".login");

  $(document)
    .on("submit.login", "#formLogin", function (e) {
      e.preventDefault();

      if (!validasiLogin()) {
        return;
      }

      var email = $("#email").val().trim().toLowerCase();
      var password = $("#password").val();

      var akun = akunContoh.find(function (a) {
        return a.email === email && a.password === password;
      });

      if (akun) {
        alert("Login berhasil sebagai " + akun.role);
        $("#formLogin")[0].reset();
      } else {
        alert("Email atau kata sandi salah");
      }
    })

    .on("click.login", "#toggleSandi", function () {
      var $input = $("#password");
      var tampil = $input.attr("type") === "password";
      $input.attr("type", tampil ? "text" : "password");
      $(this)
        .text(tampil ? "Sembunyikan" : "Tampilkan")
        .attr("aria-pressed", String(tampil));
    })

    .on("input.login", "#email, #password", function () {
      $(this).removeClass("invalid");
      $(this).siblings(".error").text("");
      $("#hasilLogin").prop("hidden", true);
    });
}

function validasiLogin() {
  var email = $("#email").val().trim();
  var password = $("#password").val();
  var valid = true;

  $(".error").text("");
  $("#email, #password").removeClass("invalid");

  var polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    tampilError("#email", "#errEmail", "Email wajib diisi.");
    valid = false;
  } else if (!polaEmail.test(email)) {
    tampilError(
      "#email",
      "#errEmail",
      "Format email tidak valid. Contoh: nama@email.com",
    );
    valid = false;
  }

  if (password === "") {
    tampilError("#password", "#errPassword", "Kata sandi wajib diisi.");
    valid = false;
  } else if (password.length < 8) {
    tampilError("#password", "#errPassword", "Kata sandi minimal 8 karakter.");
    valid = false;
  }

  if (!valid) {
    $(".invalid").first().focus();
  }

  return valid;
}

function tampilError(selectorInput, selectorPesan, pesan) {
  $(selectorInput).addClass("invalid");
  $(selectorPesan).text(pesan);
}
