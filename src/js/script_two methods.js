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
  /*function initActions(){
    const bookImages= bookList.querySelectorAll(select.bookImages);
    for(const bookImage of bookImages){
      bookImage.addEventListener('dblclick', function(event){
        event.preventDefault();
        const dataId = bookImage.getAttribute('data-id');
        if(!favouriteBooks.includes(dataId)){
          bookImage.classList.add('favorite');
          favouriteBooks.push(dataId);
          console.log(favouriteBooks);
        }
        else {
          bookImage.classList.remove('favorite');
          const indexOfBookImage = favouriteBooks.indexOf(dataId);
          console.log(indexOfBookImage);
          favouriteBooks.splice(indexOfBookImage,1);
          console.log(favouriteBooks);
        }
      });
      console.log(favouriteBooks);
    }
  }*/
  function initActions(){
    const bookImages= bookList.querySelectorAll(select.bookImages);
    for(const bookImage of bookImages){
      bookImage.addEventListener('dblclick', function(event){
        event.preventDefault();
        const dataId = bookImage.getAttribute('data-id');
        if(!bookImage.getAttribute('class').includes('favorite')){
          bookImage.classList.add('favorite');
          favouriteBooks.push(dataId);
          console.log(favouriteBooks);
        }
        else {
          bookImage.classList.remove('favorite');
          const indexOfBookImage = favouriteBooks.indexOf(dataId);
          console.log(indexOfBookImage);
          favouriteBooks.splice(indexOfBookImage,1);
          console.log(favouriteBooks);
        }
      });
      console.log(favouriteBooks);
    }
  }
 
  render();
  initActions();
}
