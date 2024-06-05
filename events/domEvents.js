// // import addVocabCard from '../components/form/addVocabCardForm';
// import getCards from '../api/vocabData';
// import { showCards } from '../pages/vocab';

// const domEvents = () => {
//   document.querySelector('#main-container').addEventListener('click', (e) => {
//     if (e.target.id.includes('delete-card-btn')) {
//       // eslint-disable-next-line no-alert
//       if (window.confirm('Want to delete?')) {
//         console.warn('CLICKED DELETE CARD', e.target.id);
//         const [, firebaseKey] = e.target.id.split('--');

//         deleteCard(firebaseKey).then(() => {
//           getCards().then(showCards);
//         });
//       }
//     }

//     // if (e.target.id.includes('add-card-btn')) {
//     //   addVocabCard();
//     //   console.warn('ADD CARD');
//     // }

//     // TODO: CLICK EVENT EDITING/UPDATING A BOOK---DONE
//     // if (e.target.id.includes('edit-book-btn')) {
//     // const [, firebaseKey] = e.target.id.split('--');

//   // getSingleBook(firebaseKey).then((bookObj) => addBookForm(bookObj));
//   // console.warn('EDIT BOOK', e.target.id);
//     // }
//   });
// };

// export default domEvents;
