let turiniai = document.querySelectorAll('main > section');

function pakeistiPuslapi (pslId) {
    for (var i = 0; turiniai.length > i; i++) {
        turiniai[i].style.display = 'none';

    }
    document.getElementById(pslId).style.display = 'block';
}

pakeistiPuslapi('contacts');