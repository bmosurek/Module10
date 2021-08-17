{
  ('use strict');
  
  const select = {
    templateOf: {
      bookTemplate: '#template-book'
    },
    bookList: '.books-list',
    bookImages:'.book__image',
    filtersForm: '.filters'


  };
  const templates = {
    bookTemplate: Handlebars.compile(document.querySelector(
      select.templateOf.bookTemplate).innerHTML)
  };
  const favouriteBooks = [];
  const bookList = document.querySelector(select.bookList);
  const filtersForm = document.querySelector(select.filtersForm);
  const filters =[];

  function render() {
    for(const book of dataSource.books){
      const generateHTML = templates.bookTemplate(book);
      book.element = utils.createDOMFromHTML(generateHTML);
      bookList.appendChild(book.element);
    }
  } 
  function initActions(){
    bookList.addEventListener('dblclick', function(event){
      event.preventDefault();
      const parentNode = event.target.offsetParent;
      if(event.target.offsetParent.classList.contains('book__image')){

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
    filtersForm.addEventListener('click', function(event){
      event.preventDefault;
      const tagName = event.target.tagName;
      const type = event.target.getAttribute('type');
      const name = event.target.getAttribute('name');
      const label = event.target.value;
      if(tagName == 'INPUT' && type == 'checkbox' && name == 'filter'){
        if(event.target.checked == true) {
          filters.push(label);
        }
        else {
          const indexOfFilters = filters.indexOf(event.target.value);
          filters.splice(indexOfFilters, 1);
        }
      }
      filterBooks();
    });
    
  }
  function filterBooks(){
    for(let book of dataSource.books){
      let bookId = book.id;
      let bookLink = document.querySelector('.book__image[data-id="' + bookId + '"]');
      let shouldBeHidden = false;
      for(let filter of filters){
        console.log('filter', filter);
        console.log('book.details[filter]', book.details[filter]);
        if(!book.details[filter] == false){
          shouldBeHidden = true;
          break;
        }
      }
      if (shouldBeHidden == true){
        bookLink.classList.add('hidden');
      }
      else{
        bookLink.classList.remove('hidden');
      }
    }

  }
  render();
  initActions();
}
