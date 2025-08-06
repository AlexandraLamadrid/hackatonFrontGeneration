function hckCarrito() {
    const div = document.getElementById("hckAside");
    if (!div) return;

    const display = window.getComputedStyle(div).display;
    if (display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}