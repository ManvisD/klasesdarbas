let turiniai = document.querySelectorAll('main > section');
let meniuElementai = document.querySelectorAll('header nav > a');

function pakeistiPuslapi (meniuElem, pslId) {
    for (var i = 0; turiniai.length > i; i++) {
        turiniai[i].style.display = 'none';
        meniuElementai[i].classList.remove('active');

    }
    meniuElem.classList.add('active');
    document.getElementById(pslId).style.display = 'block';
}

let defaultElem = document.querySelector('nav a:first-child');
pakeistiPuslapi(defaultElem, 'about');