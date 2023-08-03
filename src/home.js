 function createHome() {

const innerDiv  = document.createElement("div");
innerDiv.classList.add("main_in");

const head = document.createElement("h1");
head.innerHTML=`Welcome to The <span class="feast">Feast</span> Hub!`;

const para = document.createElement("p");
para.innerHTML = "Here food is more than just a meal,it's a celebration of flavors! <br> Come and join us , where every meal is a feast worth savoring, and every moment is a delightful celebration of food, friends, and life.<br> Bon Appétit!";

innerDiv.appendChild(head)
innerDiv.appendChild(para)

return innerDiv;
}
function loadHome(){
    const div_home = document.getElementById("main");
    div_home.innerHTML = "";
    div_home.appendChild(createHome());

}

export default loadHome;