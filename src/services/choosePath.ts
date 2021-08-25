import api from '../utils/config/api';

export async function choosePath() {
  try {
    const response = await Promise.race([
      api.get('people/1'),
      api.get('people/4'),
    ]);

    sessionStorage.setItem('single', response.data.name);

    return response.data;
  } catch (err) {
    return new Error('erro aqui');
  }
}
