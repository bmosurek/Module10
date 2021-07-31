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
    const thisBookImage = this;
    const dataId = thisBookImage.getAttribute('data-id');
    bookList.addEventListener('dblclick', function(event) {
      event.preventDefault();
      if(event.target.offsetParent.classList.contains('.book__image')){
        thisBookImage.classList.add('favorite');
        favouriteBooks.push(dataId);
      }
      else {
        thisBookImage.classList.remove('favorite');
        const indexOfBookImage = favouriteBooks.indexOf(dataId);
        favouriteBooks.splice(indexOfBookImage, 1);
      }
    });
      
    console.log(favouriteBooks);
  } 
  render();
  initActions();
}
