let button = document.getElementById('icon');
let links = document.getElementById('links');
let cont = 0;

button.addEventListener('click', () => {
    if(!cont){
        links.className = ('links two');
        cont = 1; 
    }else {
        links.classList.remove('two');
        links.className = ('links one');
        cont = 0;
    }
});