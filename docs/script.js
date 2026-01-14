// Matrix rain effect
document.addEventListener('DOMContentLoaded', () => {
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");
    c.height = window.innerHeight;
    c.width = window.innerWidth;
    var txts = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    txts = txts.split("");
    var font_size = 13.5;
    var columns = c.width / font_size;
    var drops = [];
    for (var x = 0; x < columns; x++) drops[x] = 1;

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = "#490";
        ctx.font = font_size + "px arial";
        for (var i = 0; i < drops.length; i++) {
            var text = txts[Math.floor(Math.random() * txts.length)];
            ctx.fillText(text, i * font_size, drops[i] * font_size);
            if (drops[i] * font_size > c.height || Math.random() > 0.98) drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(draw, 40);




    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('bx-x');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                menuIcon.classList.remove('bx-x');
            });
        });

        // Close menu when scrolling
        window.addEventListener('scroll', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        });
    }

    // Handle window resize for canvas
    window.addEventListener('resize', () => {
        c.height = window.innerHeight;
        c.width = window.innerWidth;
        columns = c.width / font_size;
        drops = [];
        for (var x = 0; x < columns; x++) drops[x] = 1;
    });
});

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

let currentText = 1;

setInterval(() => {
    if (currentText === 1) {
        text1.classList.remove('active');
        text2.classList.add('active');
        currentText = 2;
    } else if (currentText === 2) {
        text2.classList.remove('active');
        text1.classList.add('active');
        currentText = 1;
    }
}, 3000);


// Initialize skill bars
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    const level = item.dataset.level;
    const fill = item.querySelector('.skill-fill');
    fill.style.width = level + '%';
});
