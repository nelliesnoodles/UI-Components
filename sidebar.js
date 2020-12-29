// collapsable sidebar
//author: Nellie Tobey

let nav_sidebar;
let shiftbar;
let linkbox;

function set_DOM() {
    nav_sidebar = document.getElementById("nav_sidebar");
    shiftbar = document.getElementById("shiftbar");
    linkbox = document.getElementById("linkbox");
}

function open_sidebar() {

    let arrow = document.getElementById("arrow")
    arrow.innerHTML = ''
    arrow.innerHTML = '<i class="fas fa-angle-double-left"></i>'
    grow_sidebar()

}
function close_sidebar() {
    let arrow = document.getElementById("arrow")
    arrow.innerHTML = ''
    arrow.innerHTML = '<i class="fas fa-angle-double-right"></i>'
    shrink_sidebar()


}

function shrink_sidebar() {
    nav_sidebar.style.width = '20px';

}
function grow_sidebar() {
    nav_sidebar.style.width = '34ch';

}



function open_close() {
    let currentvalue = shiftbar.getAttribute('value');
    if (currentvalue == 'closed') {
        shiftbar.setAttribute('value', 'open')
        linkbox.style.display = 'flex'
        open_sidebar()
    }
    if (currentvalue == 'open') {
        shiftbar.setAttribute('value', 'closed')
        linkbox.style.display = "none"
        close_sidebar()
    }
    //console.log(` the side bar is: ${currentvalue} `)


}

function sidebar_listener() {
    shiftbar.addEventListener('click', open_close, false)

}

window.addEventListener('load', (event) => {
    set_DOM()
    sidebar_listener()

});
