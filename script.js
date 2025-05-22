document.querySelectorAll('.project').forEach((el, index) => {
    el.classList.add(index % 2 === 0 ? 'odd' : 'even');

    let observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            el.classList.add('visible');
            observer.unobserve(el);
        }
    }, {
        threshold: 0.2
    });

    observer.observe(el);
});

const target = document.getElementById("typingText");
const text = "Get to know me!";
let index = 0;

function typeLoop() {
    if (index <= text.length) {
        target.textContent = text.slice(0, index);
        index++;
    } else {
        index = 0;
        target.textContent = "";
    }
    setTimeout(typeLoop, 150);
}

typeLoop();