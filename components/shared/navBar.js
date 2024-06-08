import renderToDOM from '../../utils/renderToDOM';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <a class="navbar-brand title" href="#">Vocab-ing it up!</a>
        <a><i class="bi bi-book"></i></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
              <a class="nav-link" href="#" id="all-cards">
                Vocab Cards <span class="sr-only">(current)</span>
              </a>
            </li>
          <li class="nav-item">
          <button class="nav-link active" aria-current="page" id="add-entry"
          href="#">Create Entry</button>
            <li class="nav-item">
              <a class="nav-link" href="#" id="filter-category">Filter Category</a>
            </li>
          </ul>
          <span class="navbar-text">
          <div id="logout-button"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
