import loadHome from "./home"
import loadMenu from "./menu"
import loadContact from "./contact"
let state = "Home"


function loadsite() {
    const content = document.getElementById("content");
    content.appendChild(createNav());
    content.appendChild(createMain());
    content.appendChild(createFooter());

     loadHome();
}
function createNav() {
    const nav = document.createElement("nav");

    const navDiv = document.createElement("div");
    navDiv.classList.add("logo");

    const divHead = document.createElement("h3");
    divHead.innerHTML = `The <span class="feast">Feast</span> Hub`;  

    const imageNav = document.createElement("img");
    imageNav.src = "./images/logo.png";
    imageNav.alt = "Logo image"

    navDiv.appendChild(divHead);
    navDiv.appendChild(imageNav);
    
    nav.appendChild(navDiv);

    const unorderedlist = document.createElement("ul");

    const home = document.createElement("li");
    home.innerHTML = `<a href="#">Home</a>`;
   
    home.addEventListener('click', () => {
        if(state == "Home"){
            return
        }
        else{
            loadHome();
            state = "Home";
        }
        
    })
    unorderedlist.appendChild(home)
    
    const menu = document.createElement("li");
    menu.innerHTML = `<a href="#">Menu</a>`;
    menu.addEventListener('click', () => {
        if(state == "Menu"){
            return
        }
        else{
            loadMenu();
            state = "Menu";
        }
        
    })
    unorderedlist.appendChild(menu)
    
    const contact = document.createElement("li");
    contact.innerHTML = `<a href="#">Contact</a>`;
    contact.addEventListener('click', () => {
        if(state == "Contact"){
            return
        }
        else{
            loadContact();
            state = "Contact";
        }
        
    })
    unorderedlist.appendChild(contact)

    nav.appendChild(unorderedlist)
    return nav;


}
function createMain() {
const div_main = document.createElement("div");
div_main.setAttribute('id', 'main')
return div_main;
    
}
function createFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = `Made By:  <img src ="./images/github.png">  Hitesh Adhikari`;
    return footer;
    
}




loadsite();

