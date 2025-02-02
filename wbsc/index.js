function toggleMenu() {
    const nav = document.querySelector('.global-nav'); // ← 正しいクラス名指定しろしろしろしろ
    nav.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".global-nav");

    menuBtn.addEventListener("click", function() {
        menuBtn.classList.toggle("open");
        nav.classList.toggle("open");
    });
});
