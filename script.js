function question(answer)
{
    if (answer == "yes") {
        document.getElementById("answer").innerHTML = "Get in contact with me:<br>piotr-marendowski [at] tutanota.com";
        document.getElementById("answer").scrollIntoView();
    }
    else if (answer == "no") {
        document.getElementById("answer").innerHTML = "Glad to hear that!";
        document.getElementById("answer").scrollIntoView();
    }
}
