function contact()
{
    document.getElementById("answer").innerHTML = "piotr-marendowski@tutanota.com";
    document.getElementById("answer").scrollIntoView();
}

function hide(id)
{
    var e = document.getElementById(id);
    var page = window.location.href;

    if (page.includes("/es/") || page.includes("-es"))
    {
        if (e.style.display == 'block')
        {
            e.style.display = 'none';
            document.getElementById("hide").value="Mostrar";
        }
        else
        {
            e.style.display = 'block';
            document.getElementById("hide").value="Ocultar";
        }
    }
    else
    {
        if (e.style.display == 'block')
        {
            e.style.display = 'none';
            document.getElementById("hide").value="Show";
        }
        else
        {
            e.style.display = 'block';
            document.getElementById("hide").value="Hide";
        }
    }
}

function change_lang()
{
    var page = window.location.href;


    if (page.endsWith("index.html"))
        window.location.href = window.location.href.replace("index.html", "index-es.html");
    else if (page.endsWith("index-es.html"))
        window.location.href = window.location.href.replace("index-es.html", "index.html");
    else if (page.endsWith("projects.html"))
        window.location.href = window.location.href.replace("projects.html", "projects-es.html");
    else if (page.endsWith("projects-es.html"))
        window.location.href = window.location.href.replace("projects-es.html", "projects.html");
    else if (page.endsWith("about.html"))
        window.location.href = window.location.href.replace("about.html", "about-es.html");
    else if (page.endsWith("about-es.html"))
        window.location.href = window.location.href.replace("about-es.html", "about.html");
    else if (page.includes("/en/"))
        window.location.href = page.replace('/en/', '/es/');
    else if (page.includes("/es/"))
        window.location.href = page.replace('/es/', '/en/');
}
