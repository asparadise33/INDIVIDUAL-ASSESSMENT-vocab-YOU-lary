import client from '../utils/client';

const endpoint = client.databaseURL;

const getCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const createCard = (payload, uid) => new Promise((resolve, reject) => {
  console.warn(uid);
  const payload2 = { ...payload, uid };
  fetch(`${endpoint}/vocabCards.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload2),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});
const filterCards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards.json?orderBy="category"&equalTo="tech"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
export {
  getCards, deleteCard, createCard, updateCard, getSingleCard, filterCards
};
