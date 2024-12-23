
// Fade-In

const observer = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        console.log(entry);
        entry.target.classList.toggle('showAbove', entry.isIntersecting);
    });
}, );

const hiddenElements = document.querySelectorAll('.above');
hiddenElements.forEach((el) => observer.observe(el));


// Fade-Out
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        document.body.classList.add('fade-out');

        setTimeout( () => {
            window.location.href = this.href; 
        }, 1000); 
    });
});


