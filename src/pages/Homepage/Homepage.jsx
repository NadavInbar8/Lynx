import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NewPicture from '../../components/NewPicture';
import { loadPhoto } from '../../store/picture.action';
import Picture from '../Picture/Picture';
import { FcStackOfPhotos } from 'react-icons/fc';
import './Homepage.scss';

export const Homepage = () => {
  const dispatch = useDispatch();

  const { photos } = useSelector((state) => ({
    photos: state.pictureModule.photos,
  }));

  useEffect(() => {
    console.log('photos', photos);
  }, [photos]);

  return (
    <div className='homepage'>
      <div className='header flex'>
        <FcStackOfPhotos size={100} />
        <h1>Boogle Photos!</h1>
      </div>
      <Link to={`/newPicture`}>
        <div className='new-photo'>New photo</div>
      </Link>
      <div className='gallery flex'>
        {photos.length > 0 ? (
          photos.map((picture) => (
            <div key={picture.thumbnailUrl}>
              <Link to={`/${picture.id}`}>
                <img
                  className='gallery-pic'
                  src={picture.thumbnailUrl}
                  alt='thumbnail'
                  onClick={() => {
                    dispatch(loadPhoto(picture));
                  }}
                />
              </Link>
            </div>
          ))
        ) : (
          <div>no pics yet</div>
        )}
        <Routes>
          <Route path='/newPicture' element={<NewPicture />} />
          <Route path='/:photoId' element={<Picture />} />
        </Routes>
      </div>
    </div>
  );
};
