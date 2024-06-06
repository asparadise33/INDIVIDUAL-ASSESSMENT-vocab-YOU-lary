import clearDom from '../../utils/clearDOM';
import renderToDOM from '../../utils/renderToDOM';

const addVocabCard = (obj = {}) => {
  clearDom();
  const domString = `
<form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
      <div class="form-group">
        <label for="title">Card Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="cardTitle" placeholder="Enter Card Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Card Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="category">Cateory: Language or Tech?</label>
        <input type="text" class="form-control" id="category" placeholder="Card Category" value="${obj.category || ''}" required>
      </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit card</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabCard;
