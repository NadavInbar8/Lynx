import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { picturesService } from '../../services/picture.service';
import './Homepage.scss';

export const Homepage = () => {
  const [pictures, setPictures] = useState('');

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log('picture changed: ', pictures);
  }, [pictures]);

  const getData = async () => {
    try {
      const data = await picturesService.getPictures();
      setPictures(data);
    } catch (err) {
      console.log('cant get pictures: ', err);
    }
  };

  const putData = async (pic, title) => {
    console.log('pic before: ', pic);
    pic.title = title;
    console.log('pic after: ', pic);

    try {
      picturesService.putTitle(pic);
    } catch (err) {
      console.log('couldnt put: ', err);
    }
  };

  return (
    <div className='homepage'>
      <h1>Boogle Photos!</h1>
      <div className='gallery flex'>
        {pictures.length > 0 ? (
          pictures.map((picture) => (
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
