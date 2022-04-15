var hr = document.getElementById("hourDigit");
var mn = document.getElementById("minuteDigit");
var se = document.getElementById("secondDigit");
var apmp = document.querySelector("#ampmFrame h1");

var hh = document.getElementById("hh");
var mm = document.getElementById("mm");
var ss = document.getElementById("ss");

var dasharray = parseInt(window.innerWidth*0.47082990961380444);

document.getElementById("hh").style.strokeDasharray=dasharray;
document.getElementById("mm").style.strokeDasharray=dasharray;
document.getElementById("ss").style.strokeDasharray=dasharray;

window.addEventListener('resize',()=>{
    dasharray = parseInt(window.innerWidth*0.47082990961380444);

    document.getElementById("hh").style.strokeDasharray=dasharray;
    document.getElementById("mm").style.strokeDasharray=dasharray;
    document.getElementById("ss").style.strokeDasharray=dasharray;
});

setInterval(() => {
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var ap = 'AM';

    ap = (h>=12) ? 'PM' : 'AM';
    
    h = (h==0) ? '12' : h;
    h = (h>12) ? h-12 : h;
    h = (h<10) ? `0${h}` : `${h}`;
    m = (m<10) ? `0${m}` : `${m}`;
    s = (s<10) ? `0${s}` : `${s}`;

    hh.style.strokeDashoffset=parseInt(dasharray-(dasharray*(h/12)));
    mm.style.strokeDashoffset=parseInt(dasharray-(dasharray*(m/60)));
    ss.style.strokeDashoffset=parseInt(dasharray-(dasharray*(s/60)));
    
    hr.innerHTML=h;
    mn.innerHTML=m;
    se.innerHTML=s;
    apmp.innerHTML=ap;
}, 1000);