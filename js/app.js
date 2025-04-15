const balon = document.getElementById("balon");

balon.addEventListener("click", () => {
  balon.style.bottom = "100vh";

  const rastgeleRenk = "#" + Math.floor(Math.random() * 16777215).toString(16);

  balon.style.backgroundColor = rastgeleRenk;

  setTimeout(() => {
    balon.style.bottom = "0";
  }, 3000);
});
