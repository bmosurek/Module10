{
  ('use strict');
  
  const select = {
    templateOf: {
      bookTemplate: '#template-book'
    },
    bookList: '.books-list',
    bookImages:'.book__image'


  };
  const templates = {
    bookTemplate: Handlebars.compile(document.querySelector(
      select.templateOf.bookTemplate).innerHTML)
  };
  const favouriteBooks = [];
  const bookList = document.querySelector(select.bookList);
  function render() {
    const thisBook = this;
    for(const book of dataSource.books){
      const generateHTML = templates.bookTemplate(book);
      thisBook.element = utils.createDOMFromHTML(generateHTML);
      bookList.appendChild(thisBook.element);
    }
  }
  function initActions(){
    const bookImages= bookList.querySelectorAll(select.bookImages);
    console.log(bookImages);
    for(const bookImage of bookImages){
      bookImage.addEventListener('dblclick', function(event){
        event.preventDefault();
        bookImage.classList.add('favorite');
        const dataId = bookImage.getAttribute('data-id');
        console.log(dataId);
        favouriteBooks.push(dataId);
        console.log(favouriteBooks);
      });
    }
  }
 
  render();
  initActions();
}
