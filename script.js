
const butoni = document.querySelectorAll(".button");
const image = document.querySelectorAll(".image");


for (i = 0; i < butoni.length; i++) {

    butoni[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        image.forEach((image) => {
            if (filter === "tegjtha") {
                image.style.display = "block";

            }
            else {
                if (image.classList.contains(filter)) {
                    image.style.display = "block";
                }
                else {
                    image.style.display = "none";
                }
            }
        });
    });

}



function shfaqPunimet() {
    document.getElementById("shfaq").style.display = "block";
}

function ndryshoTekstin() {

    document.getElementById("first-title").innerHTML = "Veç te RIADI Patunshmeri!"
}



function llogaritDimensionet(value) {
    var rezultati;
    rezultati = 700 * value;
    document.getElementById("result").value = rezultati;


}



var ora = document.getElementById("ora");

function koha() {
    var d = new Date();
    var sekondat = d.getSeconds();
    var minutat = d.getMinutes();
    var ore = d.getHours();
    ora.textContent =
        ("Ora " + ore).substring(-2) +
        ":" +
        ("" + minutat).substring(-2) +
        ":" +
        ("" + sekondat).substring(-2);


}

setInterval(koha, 1000) 

const cards = document.querySelectorAll(".card");
function flipCard() {
    this.classList.toggle("flip");
}

cards.forEach((card) => card.addEventListener("click", flipCard));



function validateform() {
    var emri = document.myform.emri.value;
    var emaili = document.myform.email.value;
    var pershkrimi = document.myform.pershkrimi.value;

    if (emri == null || emri == "") {
        alert("Fusha e Emri eshte e pa plotesuar.");
        return false;

    }

    if (emaili == null || emaili == "") {
        alert("Emaili eshte i pa plotesuar.");
        return false;
    }

    if (pershkrimi == null || pershkrimi == "") {
        alert("Pershkrimi eshte i pa plotesuar.");
        return false;
    }


}

function ndryshoButonin() {
    document.getElementById("send-button").innerHTML = " U dergua me sukses!";
}