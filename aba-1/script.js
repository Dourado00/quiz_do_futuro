document.addEventListener("DOMContentLoaded", function () {
  const simButton = document.getElementById("sim-button");
  const naoButton = document.getElementById("nao-button");
  const confirmOverlay = document.getElementById("confirm-overlay");
  const confirmYes = document.getElementById("confirm-yes");
  const confirmNo = document.getElementById("confirm-no");

  let isConfirmBoxVisible = false;

  simButton.addEventListener("click", function (event) {
    event.preventDefault();
    confirmOverlay.style.display = "flex";
    isConfirmBoxVisible = true;
  });

  confirmYes.addEventListener("click", function () {
    window.location.href = "sim.html";
    isConfirmBoxVisible = false;
  });

  confirmNo.addEventListener("click", function () {
    confirmOverlay.style.display = "none";
    isConfirmBoxVisible = false;
  });

  naoButton.addEventListener("click", function (event) {
    if (!isConfirmBoxVisible) {
      event.preventDefault();
      window.location.href = "nao.html"; // Redireciona para outra_pagina.html
    }
  });
});
