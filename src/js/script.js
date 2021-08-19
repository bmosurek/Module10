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
  const favoriteBooks = [];
  const bookList = document.querySelector(select.bookList);
  const filtersForm = document.querySelector(select.filtersForm);
  const filters =[];

  class Booklist {
    constructor() {
      const thisBookList = this;

      thisBookList.getElements();
      thisBookList.render();
      thisBookList.initActions();
      thisBookList.filterBooks();
      thisBookList.determineRatingBgc();
    }
    initData() {
      this.data = dataSource.books;
    }
    getElements() {
    }
    render() {
      for (const book of dataSource.books) {
        book.ratingWidth = book.rating * 10;
        book.ratingBgc = this.determineRatingBgc(book.rating);
        const generateHTML = templates.bookTemplate(book);
        book.element = utils.createDOMFromHTML(generateHTML);
        bookList.appendChild(book.element);
      }
    }
    initActions() {
      const thisBookList = this;
      bookList.addEventListener('dblclick', function (event) {
        event.preventDefault();
        const parentNode = event.target.offsetParent;
        if (event.target.offsetParent.classList.contains('book__image')) {

          const dataId = parentNode.getAttribute('data-id');
          if (!favoriteBooks.includes(dataId)) {
            parentNode.classList.add('favorite');
            favoriteBooks.push(dataId);
          }
          else {
            parentNode.classList.remove('favorite');
            const indexOfBookImage = favoriteBooks.indexOf(dataId);
            favoriteBooks.splice(indexOfBookImage, 1);
          }
        }
      });
      filtersForm.addEventListener('click', function (event) {
        event.preventDefault;
        const tagName = event.target.tagName;
        const type = event.target.getAttribute('type');
        const name = event.target.getAttribute('name');
        const label = event.target.value;
        if (tagName == 'INPUT' && type == 'checkbox' && name == 'filter') {
          if (event.target.checked == true) {
            filters.push(label);
          }
          else {
            const indexOfFilters = filters.indexOf(event.target.value);
            filters.splice(indexOfFilters, 1);
          }
        }
        thisBookList.filterBooks();
      });
    
    }
    filterBooks() {
      for (let book of dataSource.books) {
        let bookId = book.id;
        let bookLink = document.querySelector('.book__image[data-id="' + bookId + '"]');
        let shouldBeHidden = false;
        for (let filter of filters) {
          if (!book.details[filter] == false) {
            shouldBeHidden = true;
            break;
          }
        }
        if (shouldBeHidden == true) {
          bookLink.classList.add('hidden');
        }
        else {
          bookLink.classList.remove('hidden');
        }
      }
    }
    determineRatingBgc(rating) {
      if (rating < 6) {
        return 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%);';
      }
      else if (rating > 6 && rating <= 8) {
        return 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%);';
      }
      else if (rating > 8 && rating <= 9) {
        return 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%);';
      }
      else {
        return 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%);';
      }
    }
  }
  new Booklist();
}
