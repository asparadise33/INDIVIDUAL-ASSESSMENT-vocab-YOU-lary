import { createCard, getCards, updateCard } from '../api/vocabData';
import { showCards } from '../pages/vocab';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK---DONE
    if (e.target.id.includes('submit-book')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').checked,
      };

      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCard(patchPayload).then(() => {
          getCards().then(showCards);
        });
      });
      console.warn('CLICKED SUBMIT CARD', e.target.id);
    }
  });
};

export default formEvents;
