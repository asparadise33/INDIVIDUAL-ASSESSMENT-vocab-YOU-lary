import client from '../utils/client';

const endpoint = client.databaseURL;

const getCards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// const createCard = (payload) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/vocabCards.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// const deleteCard = (firebaseKey) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/vocabCards/${firebaseKey}.json`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// const updateCard = (payload) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/vocabCards/${payload.firebaseKey}.json`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   })
//     .then((response) => response.json())
//     .then(resolve)
//     .catch(reject);
// });

export default getCards; // createCard, // deleteCard, // updateCard
// };
