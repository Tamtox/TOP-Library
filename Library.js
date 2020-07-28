const library = [];
let bookshelf = document.querySelector('#library')
function Book (name,author,numOfPages,isRead) {
    this.name=name
    this.author=author
    this.numOfPages=numOfPages
    this.currentPage=isRead
}
function addBook(name,author,numOfPages,isRead) {
    let newBook = new Book(name,author,numOfPages,isRead);
    library.push(newBook)
}
function render() {
    for(let book of library) {

    }
}