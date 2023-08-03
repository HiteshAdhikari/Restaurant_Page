
function createContact() {
    const contact_sec = document.createElement("div");
    contact_sec.classList.add("contact_sec");
    
    const div_phone = document.createElement("div");
    div_phone.classList.add("phone_number")
    div_phone.innerHTML = "📞 012 345 6789";
    
    const div_add = document.createElement("div");
    div_add.classList.add("address")
    div_add.innerHTML = "📍 Vish Super Market, Hyderabad, Telangana 500040";

    const map_frame = document.createElement("iframe");
    map_frame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15222.910327391484!2d78.54414632182731!3d17.472748064263907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b842db56479%3A0xa9e0d94cd6ba7023!2sThe%20Feast%20Hub!5e0!3m2!1sen!2sin!4v1691050996237!5m2!1sen!2sin";
    map_frame.width = "600";
    map_frame.height = "450";
    map_frame.style = "border:0;";
    map_frame.allowfullscreen = "";
    map_frame.loading = "lazy";
    map_frame.referrerpolicy = "no-referrer-when-downgrade";



    contact_sec.appendChild(div_phone);
    contact_sec.appendChild(div_add);
    contact_sec.appendChild(map_frame);

    return contact_sec;
    
}
function loadContact() {
    const contact_div = document.getElementById("main");
    contact_div.innerHTML = " ";
    contact_div.appendChild(createContact())
    
}
export default loadContact