let zone = document.getElementById("zone");
zone.style.backgroundColor = "red";
zone.style.height = "500px";
zone.style.width = "50px";

let count = 0;

let counter = document.getElementById("counter");
counter.style.color = "red";
counter.innerText = "Kenny est mort, " + count + " fois";


function reset() {
    let t = document.getElementById('kenny');
    console.log(t);
    t.style.top = "200px"
    t.style.left = "200px"
    count++;
    counter.innerText = "Kenny est mort, " + count + " fois";
}




document.getElementById('up').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    console.log(t);
    if(t > 0){
        t = t - 10; // Déplacement
        document.getElementById('kenny').style.top = t + 'px';
    }
});

document.getElementById('down').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    console.log(t);
    if(t < 460){
        t = t + 10; // Déplacement
        document.getElementById('kenny').style.top = t + 'px';
    }
});
document.getElementById('right').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    console.log(t);
    if(t < 460){
        t = t + 10; // Déplacement
        document.getElementById('kenny').style.left = t + 'px';
    }
});
document.getElementById('left').addEventListener('click',function() {

    let t = parseInt(document.getElementById('kenny').style.left);
    console.log(t);
    if(t > 0){
        t = t - 10; // Déplacement
        document.getElementById('kenny').style.left = t + 'px';
        if(t < 40){
            reset()
        }
    }
});

