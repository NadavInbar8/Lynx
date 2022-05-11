import { picturesService } from '../services/picture.service';

export const loadPhotos = () => {
  return async (dispatch) => {
    try {
      const photos = await picturesService.getPictures();
      dispatch({ type: 'SET_PHOTOS', photos });
    } catch (err) {
      console.log('couldnt load photos:', err);
    }
  };
};

export const loadPhoto = (photo) => {
  return async (dispatch) => {
    try {
      let currPhoto = photo;
      dispatch({ type: 'SET_PHOTO', currPhoto });
    } catch (err) {
      console.log('couldnt load photo:', err);
    }
  };
};

export const updatePhoto = (photo) => {
  return async (dispatch) => {
    try {
      const savedPhoto = picturesService.putTitle(photo);
      const action = { type: 'UPDATE_PHOTO', savedPhoto };
      dispatch(action);
    } catch (err) {
      console.log('couldnt put photo:', err);
    }
  };
};

export const addPhoto = (photo) => {
  return async (dispatch) => {
    try {
      const savedPhoto = picturesService.uploadPic(photo);
      const action = { type: 'POST_PHOTO', savedPhoto };
      dispatch(action);
    } catch (err) {
      console.log('couldnt post photo:', err);
    }
  };
};

export const deletePhoto = (photoId) => {
  return async (dispatch) => {
    try {
      picturesService.deletePic(photoId);
      dispatch({ type: 'DELETE_PHOTO', photoId });
      console.log('deleted succsessfuly');
    } catch (err) {
      console.log('couldnt delete photo:', err);
    }
  };
};
