const text =
"Java Developer | Web Developer | Future Software Engineer";

let index = 0;

function typeWriter() {

    if(index < text.length){

        document.getElementById("typing").innerHTML +=
        text.charAt(index);

        index++;

        setTimeout(typeWriter,100);
    }
}

typeWriter();

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }
    });

});

document.querySelectorAll(".hidden")
.forEach(el => observer.observe(el));

document.getElementById("year").textContent =
new Date().getFullYear();

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";
    }
    else{

        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});