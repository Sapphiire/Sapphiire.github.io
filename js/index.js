document.addEventListener('DOMContentLoaded', () => {
    const burger_menu = document.querySelector('.menu').querySelector('span')
    const modal_nav = document.querySelector('.modal-nav')
    const nav__items = document.querySelectorAll('.nav__item')
    
    burger_menu.addEventListener('click', (e) => {
        modal_nav.classList.toggle('active')
        if(burger_menu.innerHTML == "close")
            burger_menu.innerHTML = "menu";
        else 
            burger_menu.innerHTML = "close";
    })
    Array.from(nav__items).forEach(el => {
        el.addEventListener('click', e => {
            modal_nav.classList.remove('active')
            burger_menu.innerHTML = "menu"
        })
        
    })
    document.addEventListener('keydown', (e) => {
        if(e.keyCode == 27) {
            modal_nav.classList.remove('active')
            burger_menu.innerHTML = "menu"
        }
    })


    const animated_scroll_items = document.querySelectorAll('.animated-item');

    const scrollAnimation = () => {
        let scrollTriger = (3*window.innerHeight / 4) + window.scrollY;
        animated_scroll_items.forEach(el => {
            let scrollOffSet = el.offsetParent.offsetTop + el.offsetHeight/3;

            if(scrollTriger >= scrollOffSet) {
                el.classList.add('animated');
            }
            
        })
    }

    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();
    })
})



