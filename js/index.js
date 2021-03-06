//variables

const burger = document.querySelector(".burger");
const modal_nav = document.querySelector(".modal-nav");
const modal_nav_items = modal_nav.querySelectorAll("a");
const modal_links = modal_nav.querySelectorAll("a");
const animates_items = document.querySelectorAll(".animate")
// events

burger.addEventListener('click', (e) => {
    toggle(burger);
    toggle(modal_nav);
    modal_nav_items.forEach(el => toggle(el));
}) 

modal_links.forEach(link => {
    link.addEventListener('click', (e) => {
        toggle(burger);
        toggle(modal_nav);
        modal_nav_items.forEach(el => toggle(el));
    })
})

document.addEventListener('keydown', (e) => {
    if(e.keyCode == 27) {
        modal_nav.classList.remove('active');
        burger.classList.remove('active');
        modal_nav_items.forEach(el => el.classList.remove('active'));
    }
})


window.addEventListener('scroll', (e) => {
    scrollAnimation();
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


// start 

scrollAnimation();