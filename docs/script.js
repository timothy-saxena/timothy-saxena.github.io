document.addEventListener("DOMContentLoaded", () => {

  /* MATRIX RAIN */
  const canvas = document.getElementById("c");
  const ctx = canvas.getContext("2d");

  const fontSize = 14;
  const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let columns;
  let drops;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
  }

  resize();
  window.addEventListener("resize", resize);

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#22c55e";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 35);

  /* TEXT TOGGLE */
  const text1 = document.getElementById("text1");
  const text2 = document.getElementById("text2");

  let showFirst = true;
  setInterval(() => {
    showFirst = !showFirst;
    text1.classList.toggle("active", showFirst);
    text2.classList.toggle("active", !showFirst);
  }, 3000);

});
