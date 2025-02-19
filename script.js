let divekListaja = document.querySelectorAll('main div') //az összes divet megkeresi!
let felforditottak = 0;
let mik_vannak_felforditva =[];

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
function megvizsgal()
{

}

function veletlenEgesz(a,b){ //balról benne lehet, jobbról meg nem,  így a ketővel generál egy random számot
    return a+Math.floor(Math.random()*(b-a));
}

function sorsolas(){
    
    let l = keveres(divekListaja);
    let s =0;
    for (let i = 0; i < l.length; i++){
        l[i].classList.toggle(s);
        l[i+1].classList.toggle(s);
        s++;
        i++;
    }
    
}
function kiertekeles(e){
    
    if(felforditottak == 2){
        alert('többet nem fordíthatsz fel!');
    }
    else
    {
        if(e.target.classList.contains('lefordított')){
            e.target.classList.toggle('lefordított');
            e.target.classList.toggle('felfordított');
            felforditottak++;
            mik_vannak_felforditva+=e.classList;
        }else{
            alert('ezt mar felfordítottad.')
        }
    }
}
function mehetajatek(e){
    for (const d of divekListaja) {
        if(d.classList.contains('felfordított')){
            d.classList.toggle('felfordított');
            d.classList.toggle('lefordított');
        }
    }
    felforditottak = 0;
}

function main(){
   
    for (const e of divekListaja) {
        if(e.classList.contains('lefordított'))
        {
        
        }
        else
        {
            e.classList.toggle('lefordított');
        }    
    }
    sorsolas();
    for (const e of divekListaja) {
        e.addEventListener('click', kiertekeles);
    }
    mehet.addEventListener('click', mehetajatek)
}
main(); 