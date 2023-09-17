function contact()
{
    document.getElementById("answer").innerHTML = "piotr-marendowski [at] tutanota.com";
    document.getElementById("answer").scrollIntoView();
}

function hide(id)
{
    var e = document.getElementById(id);

    if (e.style.display == 'block') {
        e.style.display = 'none';
        document.getElementById("hide").value="Show"
    }
    else {
        e.style.display = 'block';
        document.getElementById("hide").value="Hide"
    }
}
