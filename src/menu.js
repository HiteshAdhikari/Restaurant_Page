function createItem(name , price) {
    const menu_item = document.createElement("div");
    menu_item.classList.add("menu_item");

    const image = document.createElement("img");
    image.src = `./images/${name}.jpg`;

    const title = document.createElement("h3");
    title.innerText = `${name}`;
    
    const about_price = document.createElement("p");
    about_price.innerHTML = `<span>&#8377;</span> ${price}`;

    menu_item.appendChild(image);
    menu_item.appendChild(title);
    menu_item.appendChild(about_price);

    return menu_item;
    
}

function createMenu(){
    const menu_sec = document.createElement("div");
    menu_sec.classList.add("menu_sec");

    menu_sec.appendChild(createItem("Aloo Puri", "299"));
    menu_sec.appendChild(createItem("Pasta", "99"));
    menu_sec.appendChild(createItem("Ramen", "299"));
    menu_sec.appendChild(createItem("Pizza & Wine", "999"));
    menu_sec.appendChild(createItem("Burger & Fries", "399"));
    menu_sec.appendChild(createItem("Sandwich", "219"));
    menu_sec.appendChild(createItem("Fried Rice Combo", "799"));
    menu_sec.appendChild(createItem("Veg Manchurian", "199"));
    menu_sec.appendChild(createItem("Cheesy Nachos", "219"));
    
    return menu_sec;
}

function loadMenu() {
    const menu_div = document.getElementById("main");
    menu_div.innerHTML = " ";
    menu_div.appendChild(createMenu())
    
}
export default loadMenu;