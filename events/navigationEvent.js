import getCards from '../api/vocabData';
import { showCards } from '../pages/vocab';
// import createButton from '../components/buttons/createCardButton';
import { signOut } from '../utils/auth';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // document.querySelector('#add-button')
  //   .addEventListener('click', createButton);

  document.querySelector('#all-cards').addEventListener('click', () => {
    getCards().then(showCards);
  });
};

export default navigationEvents;
