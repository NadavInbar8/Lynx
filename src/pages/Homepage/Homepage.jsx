import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { picturesService } from '../../services/picture.service';
import { loadPhotos } from '../../store/picture.action';
import './Homepage.scss';

export const Homepage = () => {
  // const [pictures, setPictures] = useState('');
  const dispatch = useDispatch();

  const { photos } = useSelector(
    (state) => ({
      photos: state.pictureModule.photos,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(loadPhotos());
  }, []);

  useEffect(() => {
    console.log('picture changed: ', photos);
  }, [photos]);

  // const getData = async () => {
  //   try {
  //     const data = await picturesService.getPictures();
  //     // setPictures(data);
  //   } catch (err) {
  //     console.log('cant get photos: ', err);
  //   }
  // };

  // const putData = async (pic, title) => {
  //   console.log('pic before: ', pic);
  //   pic.title = title;
  //   console.log('pic after: ', pic);

  //   try {
  //     picturesService.putTitle(pic);
  //   } catch (err) {
  //     console.log('couldnt put: ', err);
  //   }
  // };

  return (
    <div className='homepage'>
      <h1>Boogle Photos!</h1>
      <div className='gallery flex'>
        {photos.length > 0 ? (
          photos.map((picture) => (
            <div key={picture.id}>
              <Link to={`/${picture.id}`}>
                <img src={picture.thumbnailUrl} alt='thumbnail' />
              </Link>
            </div>
          ))
        ) : (
          <div>no pics yet</div>
        )}
      </div>
    </div>
  );
};
