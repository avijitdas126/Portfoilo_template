let menu=document.querySelector('#menu')
let moblie_nav=document.querySelector('.nav-moblie')
let sections=document.querySelectorAll('section')
let nav_link=document.querySelectorAll('.nav_link')
nav_link=Array.from(nav_link)
let current1="fa-bars"
nav_link.forEach(item=>{
    item.addEventListener('click',(e)=>{
        menu.classList.add('fa-bars')
        menu.classList.remove('fa-xmark')
        moblie_nav.classList.add('hidden')
    })
})
menu.addEventListener('click',()=>{
    current1=menu.getAttribute('class')
    if(current1.includes('fa-bars')){
        // console.log("fa-bars");
        menu.classList.remove('fa-bars')
        menu.classList.add('fa-xmark')
        moblie_nav.classList.remove('hidden')
    }
    else{
        // console.log("fa-bars1");
        menu.classList.add('fa-bars')
        menu.classList.remove('fa-xmark')
        moblie_nav.classList.add('hidden')
    }
    // fa-solid fa-xmark
    // fa-solid fa-bars
})

function showLoader() {
    document.getElementById('loader').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Hide loader function
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Simulate content loading
document.addEventListener("DOMContentLoaded", function() {
    showLoader();
    // Simulating content loading with a timeout
    setTimeout(function() {
        hideLoader();
        // Now you can display your content
    }, 3000); // 3 seconds delay for demonstration
});
let current='about'
nav_link.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
        nav_link.forEach((el)=>{
            el.classList.remove('active')
        })
        e.target.classList.add('active')
    })
})
let activelink=()=>{
    sections.forEach(section=>{
        let sectionTop=section.offsetTop;
        if(this.scrollY>=sectionTop-60){
            current=section.getAttribute('id')
        }
    })
    nav_link.forEach(item=>{
        item.classList.remove('active')
        
        if(item.href.includes(current)){
            item.classList.add('active')
        }
    })
}
window.addEventListener('scroll',activelink)