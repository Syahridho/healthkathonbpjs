$(document).ready(function () {
  $("#imageSelect").select2({
    templateResult: formatState,
    templateSelection: formatState,
  });

  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var $state = $(
      '<span><img src="' +
        $(state.element).data("image") +
        '" style="width:60px; height:17px; margin-right:10px; vertical-align:middle;"/> ' +
        state.text +
        "</span>"
    );
    return $state;
  }

  // Tab switching functionality
  $(".btn-active, .btn-no-active").click(function () {
    // Remove active class from all buttons
    $(".btn-active, .btn-no-active")
      .removeClass("btn-active")
      .addClass("btn-no-active");

    // Add active class to the clicked button
    $(this).removeClass("btn-no-active").addClass("btn-active");

    // Hide all tab contents
    $(".tab-pane").removeClass("show active");

    // Show the relevant tab content based on which button was clicked
    if ($(this).text().trim() === "Tagihan") {
      $("#v-pills-tagihan").addClass("show active");
    } else if ($(this).text().trim() === "Riwayat") {
      $("#v-pills-riwayat").addClass("show active");
    }
  });
});

let nomor = document.getElementById("nomor");
let isi = document.getElementById("isi");

nomor.addEventListener("change", function () {
  if (nomor.value === "nik") {
    isi.innerHTML = "NIK";
  } else {
    isi.innerHTML = "NO BPJS";
  }
});

function ubahStatus(btn) {
  // Mengubah warna button menjadi hijau dengan mengganti class
  btn.classList.remove("btn-secondary");
  btn.classList.add("btn-success");

  // Mengubah text button
  btn.textContent = "Berhasil Dibayar";

  // Opsional: menonaktifkan button setelah diklik
  btn.disabled = true;
}
