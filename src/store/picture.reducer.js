import { userService } from '../services/user.service';

const initialState = {
  photos: photoService.getPictures() || [],
  photo: {},
};

export function userReducer(state = initialState, action) {
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
