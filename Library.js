let library = {};
function Book (name,author,numOfPages,currentPage) {
    this.name=name
    this.author=author
    this.numOfPages=numOfPages
    this.currentPage=currentPage
}
function addBook(name,author,numOfPages,currentPage) {
    let newBook = new Book(name,author,numOfPages,currentPage);
    library.push(newBook)
}
function removeBook() {

}