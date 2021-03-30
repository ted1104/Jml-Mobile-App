import axios from 'axios';

const TOKE_CONFIG = {
  authorization: '3bacb9ec-9fbc-4442-ab76-3a6e35b0a627',
  'Content-Type': 'multipart/form-data',
};

export function getCreateLineArticle(codearticle, qte, depot) {
  const url =
    'http://192.168.43.103/GestionBoutique/api/v1/articles-search-data-commande/' +
    codearticle +
    '/' +
    qte +
    '/' +
    depot +
    '/0/search';
  return axios
    .get(url, {headers: TOKE_CONFIG})
    .then((response) => response)
    .catch((error) => console.log('Erreur request ' + error));
}
