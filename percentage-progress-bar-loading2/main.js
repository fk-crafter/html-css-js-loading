const root = document.documentElement;
let value = document.querySelector('.value');
let counter=0;
window.onload =()=>{
    let inter = setInterval(()=>{
        root.style.setProperty('--range', `${++counter}%`);
        value.innerText = counter+'%';
        if(counter == 100){
            clearInterval(inter);
        }
    },10);
}
