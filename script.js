function question(answer)
{
    if (answer == "yes") {
        document.getElementById("answer").innerHTML = "Get in contact with me:<br>piotr-marendowski@tutanota.com";
        document.getElementById("answer").scrollIntoView();
    }
    else if (answer == "no") {
        document.getElementById("answer").innerHTML = "Glad to hear that!";
        document.getElementById("answer").scrollIntoView();
    }
}
function closeNotification()
{
  var notification = document.getElementById("notification");
  notification.style.display = "none";
}
