let divekListaja = document.querySelectorAll('main div') //az összes divet megkeresi!

function keveres(t){ //megkeveri a beérkező lista elemeit
    let l = [...t] //átmásolja t elemeit l-be
    for (let i =0; i < l.length; i++) {
        let temp = l[i];
        let x = veletlenEgesz(i, l.length)
        l[i] = l[x];
        l[x] = temp;
    }
    return l;
}

function veletlenEgesz(a,b){ //balról benne lehet, jobbról meg nem,  így a ketővel generál egy random számot
    return a+Math.floor(Math.random()*(b-a));
}

function sorsolas(db){
    
    let l = keveres(divekListaja);
    for (let i = 0; i < db; i++){
        l[i].classList.toggle('piros');
            
    }
    
}
function kiertekeles(e){
    if(e.target.classList.contains('titkosüzenet')){
        e.target.classList.toggle('piros');
        e.target.classList.toggle('titkosüzenet');
    }else{
        alert('Nem ez volt az.')
    }
    
}
function mehetajatek(e){
    for (const d of divekListaja) {
        if(d.classList.contains('piros')){
            d.classList.toggle('piros');
            d.classList.toggle('titkosüzenet');
        }
    }
}

function main(){
    sorsolas(5);
    for (const e of divekListaja) {
        e.addEventListener('click', kiertekeles);
    }
    mehet.addEventListener('click', mehetajatek)
}
main();