{
  ('use strict');
  
  const select = {
    templateOf: {
      bookTemplate: '#template-book'
    },
    bookList: '.books-list'


  };
  const templates = {
    bookTemplate: Handlebars.compile(document.querySelector(
      select.templateOf.bookTemplate).innerHTML)
  };
  function render() {
    const thisBook = this;
    for(const book of dataSource.books){
      const generateHTML = templates.bookTemplate(book);
      thisBook.element = utils.createDOMFromHTML(generateHTML);
      const container = document.querySelector(select.bookList);
      container.appendChild(thisBook.element);
    }
  }
 
  render();
}
