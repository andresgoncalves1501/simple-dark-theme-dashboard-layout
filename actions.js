var navOpen = false;

function change(btn) {
    var sidebar = document.getElementById("sidebar");
    
    btn.classList.toggle("btn-close");
    
    navOpen = !navOpen;
    if(navOpen) {
        sidebar.classList.add("sidebar-open");
    } else {
        sidebar.classList.remove("sidebar-open");
    }
}