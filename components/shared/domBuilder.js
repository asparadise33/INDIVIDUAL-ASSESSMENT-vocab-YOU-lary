import renderToDOM from '../../utils/renderToDOM';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="vocab-page"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
