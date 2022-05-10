import { picturesService } from '../services/picture.service';

const initialState = {
  photos: [],
  photo: {},
};

export function pictureReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case 'SET_PHOTOS':
      newState = { ...state, photos: action.photos };
      break;
    case 'SET_PHOTO':
      newState = { ...state, photo: action.currPhoto };
      break;
    case 'UPDATE_PHOTO':
      newState = { ...state, photo: action.photo };
      break;
    case 'POST_PHOTO':
      newState = { ...state, photos: [...state.photos, action.savedPhoto] };
      break;
    case 'DELETE_PHOTO':
      newState = {
        ...state,
        photos: state.photos.filter((picture) => picture.id !== action.photoId),
      };
      break;
    default:
  }
  return newState;
}
