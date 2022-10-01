const sayi=document.getElementById("sayi");
const arttir=document.getElementById("arttir");
const azalt = document.getElementById("azalt");
const sifirla= document.getElementById("sifirla");
let counter=0 ;

arttir.addEventListener("click", () => {
    counter+=Number(girdi.value);
    sayi.innerText=counter ;
})
azalt.addEventListener("click", () => {
    counter-=Number(girdi.value);
    sayi.innerText=counter;
})
sifirla.addEventListener("click",() => {
    counter=0;
    sayi.innerText=counter;
})
girdi.addEventListener("keydown",(event)=>{
    if(event.keyCode===13){
        arttir.click();
    }
    else if(event.keyCode===32){
        azalt.click();
    }
})
