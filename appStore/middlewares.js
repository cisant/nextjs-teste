import api from 'services/api';

/**
 * Busca dados do usuario na store e adiciona na instancia da API
 * @param {function} store
 */
const authMiddleware = store => next => action => {
  const { auth } = store.getState();
  if (auth.access_token) {
    api.setHeader('Authorization', `Bearer ${auth.access_token}`);
  }
  next(action);
};

export { authMiddleware };
