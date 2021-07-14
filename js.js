var append = document.getElementById("guias");


var iframe = document.createElement("iframe");

var section = document.createElement("section");
section.id = "m";

var div1 = document.createElement("div");
div1.id = "div1";
div1.innerHTML = "Guías 1";


function init() {

    append.appendChild(section);
    section.appendChild(div1);

    div1.addEventListener("click", () => {
        append.removeChild(section); 
        mapG("1") 
    });
}

function mapG(x) {
    if (x == "1") {
       iframe.src = "https://drive.google.com/embeddedfolderview?id=1bletPFEdZNQIVYYu4_U0G85xI7lJJGlg#list"
       append.appendChild(iframe);
    }
}
init();