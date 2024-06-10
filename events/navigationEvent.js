import { getCards, filterCards } from '../api/vocabData';
import addVocabCard from '../components/form/addVocabCardForm';
import { showCards } from '../pages/vocab';
import { signOut } from '../utils/auth';

const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-cards').addEventListener('click', () => {
    getCards(user.uid).then(showCards);
  });

  document.querySelector('#add-entry').addEventListener('click', () => {
    addVocabCard();
  });

  document.querySelector('#filter-category').addEventListener('click', () => {
    filterCards(user.uid).then(showCards);
  });
};

export default navigationEvents;
