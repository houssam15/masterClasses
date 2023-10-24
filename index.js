

const  observer = new IntersectionObserver((entreries)=>{
    entreries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    });
});

const hiddenElements    =  document.querySelectorAll('.hidden');
let lastScroll=[0]
window.addEventListener("scroll",()=>{

    const scrolled = window.scrollY
    console.log(typeof scrolled)
    if(lastScroll[lastScroll.length-1]<scrolled){
        hiddenElements.forEach((el)=>observer.observe(el));
        }
    lastScroll.push(scrolled)
})

