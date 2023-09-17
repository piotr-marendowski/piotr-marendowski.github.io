function contact()
{
    document.getElementById("answer").innerHTML = "piotr-marendowski [at] tutanota.com";
    document.getElementById("answer").scrollIntoView();
}

function hide(id1, id2)
{
    var e = document.getElementById(id1);
    var a = document.getElementById(id2);

    if (e.style.display == 'block') {
        e.style.display = 'none';
        document.getElementById("hide").value="Show"
    }
    else {
        e.style.display = 'block';
        document.getElementById("hide").value="Hide"
    }

    if (a.style.display == 'block') {
        a.style.display = 'none';
        document.getElementById("hide").value="Show"
    }
    else {
        a.style.display = 'block';
        document.getElementById("hide").value="Hide"
    }
}
