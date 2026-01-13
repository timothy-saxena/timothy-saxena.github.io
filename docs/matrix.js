/* const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff66"; // green
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 35); // higher = slower, smoother
 */

/* MATRIX BACKGROUND */
const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00cc66";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 40);

/* TEXT TOGGLE */
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
let showFirst = true;

setInterval(() => {
    showFirst = !showFirst;
    text1.classList.toggle("active", showFirst);
    text2.classList.toggle("active", !showFirst);
}, 3000);

/* SKILL BARS */
document.querySelectorAll(".skill-item").forEach(item => {
    const level = item.dataset.level;
    const fill = item.querySelector(".skill-fill");
    fill.style.width = level + "%";
});
