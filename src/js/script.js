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
    for(const book of dataSource.books){
      const generateHTML = templates.bookTemplate(book);
      book.element = utils.createDOMFromHTML(generateHTML);
      bookList.appendChild(book.element);
    }
  } 
  function initActions(){
  //const bookImages= bookList.querySelectorAll(select.bookImages);
    bookList.addEventListener('dblclick', function(event){
      event.preventDefault();
      const parentNode = event.target.offsetParent;
      console.log('parentNode', parentNode);
      if(event.target.offsetParent.classList.contains('book__image')){
        console.log('event.taget', event.target);

        const dataId = parentNode.getAttribute('data-id');
        if(!favouriteBooks.includes(dataId)){
          parentNode.classList.add('favorite');
          favouriteBooks.push(dataId);
        }
        else {
          parentNode.classList.remove('favorite');
          const indexOfBookImage = favouriteBooks.indexOf(dataId);
          favouriteBooks.splice(indexOfBookImage,1);
        }
      }
    });
    
  }
  render();
  initActions();
  //initActions();
}
