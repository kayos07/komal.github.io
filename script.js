// console.log("abhayas kar komal");

let bar = document.getElementById('inst_bar');
let cross = document.getElementById('inst_crs');

let navbar = document.querySelector("#navbar-list");

bar.addEventListener('click',()=>{

    navbar.style.marginTop = "24rem"
    bar.style.display="none"
    cross.style.display="block"
    navbar.style.transition = "all 1s"
});

cross.addEventListener('click',()=>{

    navbar.style.marginTop = "-28rem"
    bar.style.display="block"
    cross.style.display="none"
    navbar.style.transition = "all 1s"
});