import clearDom from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const emptycards = () => {
  const domString = '<h1>No cards</h1>';
  renderToDOM('#vocab-page', domString);
};

const showCards = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card"style="height: 300px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-description">${item.description}</p>
            <p class="card-text bold">${item.category}<span class="badge badge-info category-badge"><i class="fa fa-book" aria-hidden="true"></i> Tech</span></p>
            <hr>
            <button id="edit-card-btn--${item.firebaseKey}" class="btn btn-link">Edit</button>
            <button id="delete-card-btn--${item.firebaseKey}" class="btn btn-link">Delete</button>
        </div>
      </div>`;
  });
  renderToDOM('#vocab-page', domString);
};

export { showCards, emptycards };
