let menu = document.querySelector('.menu-icon'); 
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle("move");
};
window.onscroll = () =>{
    navbar.classList.remove('open-menu');
    menu.classList.remove("move");
}

//REWIEWS SWIPER
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
});

// EMAIL JS
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".message");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name, email, msg) {
    emailjs.send("service_04uuu14","template_d9qnb37",{
        to_name: email,
        from_name: name,
        message: msg,
        });
}



function emptyerror() {
    swal({
        title:"Oh No...",
        text:"Fields cannot be empty",
        icon: "error",
    });
}

function success() {
    swal({
        title:"Email sent successfully",
        text:"We try to reply in 24 hours",
        icon: "success",
    });
}

// Header background change On scroll

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

// SCROOL TOP

let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});