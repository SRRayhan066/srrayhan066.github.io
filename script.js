
const tablinks = document.getElementsByClassName("list");
const tabcontents = document.getElementsByClassName("projects");

let sideMenu = document.getElementById('sideMenu');

function openMenu(){
    sideMenu.style.right="0%";
}

function closeMenu(){
    sideMenu.style.right="-100%";
}

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("project-filter-active");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("project-filter-active");
    document.getElementById(tabname).classList.add("active-tab");
}