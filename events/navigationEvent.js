import { getCards, filterCards } from '../api/vocabData';
import { showCards } from '../pages/vocab';
import { signOut } from '../utils/auth';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-cards').addEventListener('click', () => {
    getCards().then(showCards);
  });

  document.querySelector('#filter-category').addEventListener('click', () => {
    filterCards().then(showCards);
  });
};

export default navigationEvents;
