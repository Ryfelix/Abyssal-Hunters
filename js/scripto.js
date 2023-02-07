///NAMA   : Ryan Akbar Ramadhan
///NIM    : 10122479
///KELAS  : IF - 8 

const btnElList = document.querySelectorAll('.btn');

btnElList.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        document.querySelector('.btn-pressed')?.classList.remove('btn-pressed');
        btnEl.classList.add('btn-pressed');
    })   
})

const imghov = document.getElementById("imghov");
const img = document.getElementById("image")

imghov.addEventListener("mousemove", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x,y);

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)"
})

imghov.addEventListener("mouseleave", (e) => {
    img.style.transformOrigin = "center";
    img.style.transform = "scale(1)"
})

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup2(){
    document.getElementById("popup-2").classList.toggle("active");
}

function togglePopup3(){
    document.getElementById("popup-3").classList.toggle("active");
}

function togglePopup4(){
    document.getElementById("popup-4").classList.toggle("active");
}

function togglePopup5(){
    document.getElementById("popup-5").classList.toggle("active");
}


