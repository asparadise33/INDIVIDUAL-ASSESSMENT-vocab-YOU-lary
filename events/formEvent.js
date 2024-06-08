import { createCard, getCards, updateCard } from '../api/vocabData';
import { showCards } from '../pages/vocab';

const formEvents = (user) => {
  console.warn(user);
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        category: document.querySelector('#category').value,
      };

      createCard(payload, user.uid).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCard(patchPayload).then(() => {
          getCards(user.uid).then(showCards);
        });
      });
      console.warn('CLICKED SUBMIT CARD', e.target.id);
    }
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        category: document.querySelector('#category').value,
        firebaseKey,
      };

      updateCard(payload).then(() => {
        getCards().then(showCards);
      });
    }
  });
};

export default formEvents;
