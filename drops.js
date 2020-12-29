// JavaScript source code
// drop menu code for Clone of Cobbler


let menus = {
    'dropmenu1': null,
    'dropmenu2': null,
    'dropmenu3': null,
}

let drops = {
    'download': null,
    'community': null,
    'github': null,
}

let icons = {
    'load_icon': null,
    'comm_icon': null,
    'git_icon': null,
}

function set_DROPMENU() {
    menus['dropmenu1'] = document.getElementById("download-drop")
    menus['dropmenu2'] = document.getElementById("community-drop")
    menus['dropmenu3'] = document.getElementById("github-drop")
    drops['download'] = document.getElementById("download-menu")
    drops['community'] = document.getElementById("community-menu")
    drops['github'] = document.getElementById("github-menu")
    icons['load_icon'] = document.getElementById('download_drop_icon')
    icons['comm_icon'] = document.getElementById('community_drop_icon')
    icons['git_icon'] = document.getElementById('github_drop_icon')
    
    
    
}
function show_menu(element) {
    element.style.display = 'flex';
    
    
}

function hide_menu(element) {
    element.style.display = 'none';
    
}

function toggle_menus(current_element) {
    let c_id = current_element.id
    let download = drops['download']
    let community = drops['community']
    let github = drops['github']
    let d_icon = icons['load_icon']
    let c_icon = icons['comm_icon']
    let g_icon = icons['git_icon']
    //console.log("toggling menus")
    //console.log(c_id)
    let current_value = current_element.getAttribute('value')
    console.log(current_value)
    if (current_value == 'closed') {
        switch (c_id) {
            case 'download-drop':
                show_menu(download)
                hide_menu(github)
                hide_menu(community)
                current_element.setAttribute('value', 'open')
                d_icon.innerHTML = '<i class="fas fa-minus-square"></i>'
               

                break;
            case 'community-drop':
                show_menu(community)
                hide_menu(github)
                hide_menu(download)
                current_element.setAttribute('value', 'open')
                c_icon.innerHTML = '<i class="fas fa-minus-square"></i>'
                
                break;
            case 'github-drop':
                show_menu(github)
                hide_menu(download)
                hide_menu(community)
                current_element.setAttribute('value', 'open')
                g_icon.innerHTML = '<i class="fas fa-minus-square"></i>'
                break;
            default:
                hide_menu(github)
                hide_menu(community)
                hide_menu(download)
        }
    }
    else {
        switch (c_id) {
            case 'download-drop':
                hide_menu(download)                
                current_element.setAttribute('value', 'closed')
                d_icon.innerHTML = '<i class="fas fa-plus-square"></i>'

                break;
            case 'community-drop':
                hide_menu(community)
                current_element.setAttribute('value', 'closed')
                c_icon.innerHTML = '<i class="fas fa-plus-square"></i>'
                break;
            case 'github-drop':
                hide_menu(github)
                current_element.setAttribute('value', 'closed')
                c_icon.innerHTML = '<i class="fas fa-plus-square"></i>'
                break;
            default:
                d_icon.innerHTML = '<i class="fas fa-plus-square"></i>'
                c_icon.innerHTML = '<i class="fas fa-plus-square"></i>'
                c_icon.innerHTML = '<i class="fas fa-plus-square"></i>'
                hide_menu(github)
                hide_menu(community)
                hide_menu(download)
        }

    }
}


window.addEventListener('load', (event) => {
    set_DROPMENU()
    
    
});