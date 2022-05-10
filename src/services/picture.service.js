import axios from 'axios';
import { httpService } from './http.service';

const getPictures = async () => {
  const pictures = await axios
    .get('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.data.splice(0, 100));
  return pictures;
};

const getById = async (photoId) => {
  const photo = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${photoId}`
  );
  return photo;
};

const putTitle = (picObj) => {
  fetch('https://jsonplaceholder.typicode.com/photos/1', {
    method: 'PUT',
    body: JSON.stringify({ ...picObj }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const uploadPic = (picObj) => {
  fetch('https://jsonplaceholder.typicode.com/photos', {
    method: 'POST',
    body: JSON.stringify({ ...picObj }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  return picObj;
};

const deletePic = (picId) => {
  fetch(`https://jsonplaceholder.typicode.com/photos/${picId}`, {
    method: 'DELETE',
  });
};

export const picturesService = {
  getPictures,
  putTitle,
  uploadPic,
  deletePic,
  getById,
};
