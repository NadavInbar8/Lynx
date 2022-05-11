import { useEffect, useState } from 'react';
import './Picture.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deletePhoto, updatePhoto } from '../../store/picture.action';
import { useNavigate } from 'react-router-dom';
import trash from '../../assets/trash.svg';

const Picture = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { photo } = useSelector((state) => ({
    photo: state.pictureModule.photo,
  }));

  const [title, setTitle] = useState(photo.title);
  const [width, setWidth] = useState('');

  useEffect(() => {
    console.log('photo has changed', photo);
  }, [photo]);

  const handleChange = ({ target }) => {
    const value = target.value;
    setWidth(value.length + 'ch');
    setTitle(value);
  };

  const putData = async (newTitle) => {
    dispatch(updatePhoto({ ...photo, title: newTitle }));
  };

  const removePhoto = async (photoId) => {
    dispatch(deletePhoto(photoId));
    navigate('/', { replace: true });
  };
  const goBack = () => {
    navigate('/', { replace: true });
  };

  return (
    <>
      <div className='picture'>
        <div className='content'>
          <img src={photo.url} alt='pic' className='photo' />
          <input
            className='picture-title'
            style={{ width }}
            onBlur={() => putData(title)}
            onChange={handleChange}
            name='title'
            title={title}
            value={title}
            type='text'
          />
          <div className='delete-btn' onClick={() => removePhoto(photo.id)}>
            <img src={trash} alt='delete' />
          </div>
        </div>
        <div className='cover' onClick={goBack}></div>
      </div>
    </>
  );
};

export default Picture;
