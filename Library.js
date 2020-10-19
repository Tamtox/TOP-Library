let inputs = document.querySelector('#inputs');
let toggle = document.querySelector('#toggle');
let addBook = document.querySelector('#addbook')
let removeBook = document.querySelector('#removebook');
let library = document.querySelector('#library');
// Toggle forms display
inputs.style.display = 'none'
toggle.addEventListener('click',function() {
    if(inputs.style.display === 'flex') {
        inputs.style.display = 'none'
    }
    else if(inputs.style.display === 'none') {
        inputs.style.display = 'flex'
    }
})
// Forms
addBook.addEventListener('submit',function(e) {
    e.preventDefault();
    let title = addBook.elements.title;
    let author = addBook.elements.author;
    let cover = addBook.elements.cover;
    const newBook = new Book(title.value,author.value,cover.value);
    title.value = ''
    author.value = ''
    cover.value = ''
    newBook.render()
})
removeBook.addEventListener('submit',function(e) {
    e.preventDefault();
    let title = removeBook.elements.title;
    let containers = document.querySelectorAll('.container-info');
    for(let i of containers) {
        let name = i.innerHTML.split(' by ')[0];
        if(title.value === name) {
            i.parentElement.remove()
        }
    }
    title.value = ''
})
// Books constructor
class Book {
    constructor(title,author,url) {
        this.title = title;
        this.author = author;
        this.url = url;
    }
    render() {
        let container = document.createElement('div');
        container.classList.add('book-container');
        let cover = document.createElement('div');
        cover.classList.add('container-cover');
        let image = document.createElement('img');
        image.classList.add('image');
        image.setAttribute('src',`${this.url}`);
        let info = document.createElement('div');
        info.classList.add('container-info');
        info.innerText = `${this.title} by ${this.author}`
        cover.appendChild(image);
        container.appendChild(cover);
        container.appendChild(info);
        library.appendChild(container);
    }
} 