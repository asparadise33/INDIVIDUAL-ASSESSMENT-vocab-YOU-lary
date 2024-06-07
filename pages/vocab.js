import clearDom from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const emptycards = () => {
  const domString = '<h1>No cards</h1>';
  renderToDOM('#vocab-page', domString);
};

const showCards = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-card-btn">Add A Card</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card"style="height: 300px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-description">${item.description}</p>
            <p class="card-text bold">${item.category ? `<span class="badge badge-info category-badge"><i class="fa fa-book" aria-hidden="true"></i>Category</span> ${item.language}` : `${item.tech}`}</p>
            <hr>
            <i id="edit-card-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info">Edit</i>
            <i id="delete-card-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete</i>
        </div>
      </div>`;
  });
  renderToDOM('#vocab-page', domString);
};

export { showCards, emptycards };
