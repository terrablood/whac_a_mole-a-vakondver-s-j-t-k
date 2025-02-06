let divek = document.querySelectorAll('div') //az összes divet megkeresi!

function keveres(t){ //megkeveri a beérkező lista elemeit
    let l = [...t] //átmásolja t elemeit l-be
    for (let i =0; i < l.lenght; i++) {
        let t = l[i];
        let x = veletleegesz(i, l.lenght)
        l[i] = l[x];
        l[x] = t;
    }
    return l;
}

function veletleegesz(a,b){ //balról benne lehet, jobbról meg nem,  így a ketővel generál egy random számot
    return a+Math.floor(Math.random()*(b-a));
}