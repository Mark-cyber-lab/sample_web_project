
function changeColor(identification) {
    // Change button's font and background color onclick
    document.getElementById("OB").style.background = "white";
    document.getElementById("COD").style.background = "white";
    document.getElementById("CDC").style.background = "white";
    document.getElementById("OB").style.color = "black";
    document.getElementById("COD").style.color = "black";
    document.getElementById("CDC").style.color = "black";
    document.getElementById(identification).style.background = "black";
    document.getElementById(identification).style.color = "white";

    // Display options for each payment method accordingly
    if (identification !== "COD") {
        if (identification === "CDC") {
            document.getElementById("cdc-col").setAttribute("style", "height: auto; padding-bottom: 32px");
            document.getElementById("credit").setAttribute("style", "opacity: 1");
            document.getElementById("online").setAttribute("style", "opacity: 0");
        } else {
            document.getElementById("online").setAttribute("style", "opacity: 1");
            document.getElementById("credit").setAttribute("style", "opacity: 0");
              document.getElementById("cdc-col").setAttribute("style", "height: 70.2px; padding-bottom: 0px");
        }
    } else {
        document.getElementById("online").setAttribute("style", "opacity: 0");
        document.getElementById("credit").setAttribute("style", "opacity: 0");
         document.getElementById("cdc-col").setAttribute("style", "height: 70.2px; padding-bottom: 0");
    }
}

function chosenCard(identification) {
    document.getElementById("bdo").style.background = "white";
    document.getElementById("dbp").style.background = "white";
    document.getElementById("landbank").style.background = "white";
    document.getElementById("bdo").style.color = "black";
    document.getElementById("dbp").style.color = "black";
    document.getElementById("landbank").style.color = "black";
    document.getElementById(identification).style.background = "darkgreen";
    document.getElementById(identification).style.color = "white";
}

function chosenBank(identification) {
    document.getElementById("paymaya").style.background = "white";
    document.getElementById("gcash").style.background = "white";
    document.getElementById("paymaya").style.color = "black";
    document.getElementById("gcash").style.color = "black";
    document.getElementById(identification).style.background = "rgb(220,129,23)";
    document.getElementById(identification).style.color = "white";
}
