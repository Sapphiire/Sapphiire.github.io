//variables

const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const modal_nav = document.querySelector(".modal-nav");
const modal_links = modal_nav.querySelectorAll("a");
const animates_items = document.querySelectorAll(".animate")

// events

burger.addEventListener('click', (e) => {
    toggle(burger)
    toggle(modal_nav);
}) 

modal_links.forEach(link => {
    link.addEventListener('click', (e) => {
        toggle(burger);
        toggle(modal_nav);
    })
})

document.addEventListener('keydown', (e) => {
    if(e.keyCode == 27) {
        modal_nav.classList.remove('active');
        burger.classList.remove('active');
    }
})


window.addEventListener('scroll', (e) => {
    scrollAnimation();
    scrollHeader();
})

// functions

const toggle = (item) => {
    if(item.classList.contains("active"))
        item.classList.remove("active");
    else
        item.classList.add("active");
}

const scrollAnimation = () => {
    let scrollTrigger = (1*window.innerHeight / 2) + window.scrollY;
    animates_items.forEach(el => {
        let scrollOffSet = el.offsetParent.offsetTop + el.offsetHeight/4;
        if(scrollTrigger >= scrollOffSet)
            el.classList.add('animated');
    })
}

const scrollHeader = () => {
    let scrollTrigger = 3*window.innerHeight/4;
    if(window.scrollY > scrollTrigger)
        header.classList.add("active");
    else 
        header.classList.remove("active");
}

// start 

scrollHeader();
scrollAnimation();