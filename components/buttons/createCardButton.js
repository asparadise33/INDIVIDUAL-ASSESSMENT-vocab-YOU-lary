import renderToDOM from '../../utils/renderToDOM';

const createButton = () => {
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-card-btn">Create an Entry</button>';
  document.querySelector('#add-button').innerHTML = (btnString);
  renderToDOM('#add-button', btnString);
};
export default createButton;
