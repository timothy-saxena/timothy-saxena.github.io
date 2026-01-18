// Matrix rain effect
document.addEventListener('DOMContentLoaded', () => {
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");
    c.height = window.innerHeight;
    c.width = window.innerWidth;
    var txts = "01(){}[]<>;:=+-*/";
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
    setInterval(draw, 30);

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
    /*     const line2 = document.getElementById("line2");
    
        function animateTagline() {
            // show second line
            line2.style.opacity = "1";
    
            // hide after visible for a while
            setTimeout(() => {
                line2.style.opacity = "0";
            }, 1250);
        }
    
        // start loop
        setInterval(animateTagline, 2000);
     */
    //scroll spy
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

});


// Initialize skill bars
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    const level = item.dataset.level;
    const fill = item.querySelector('.skill-fill');
    fill.style.width = level + '%';
});
