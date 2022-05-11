import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { utilService } from '../services/util.service';
import { addPhoto } from '../store/picture.action';
import './NewPicture.scss';

const NewPicture = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [newPic, setNewPic] = useState({
    title: '',
    albumId: 1,
    id: utilService.getRandomInt(101, 99999),
    url: '',
    thumbnailUrl: '',
  });

  const handleChange = async ({ target }) => {
    const field = target.name;
    const value = target.value;
    setNewPic({ ...newPic, [field]: value });
  };

  const goBack = () => {
    navigate('/', { replace: true });
  };

  const addPic = () => {
    dispatch(addPhoto(newPic));
  };
  return (
    <>
      <div className='add-photo'>
        <label htmlFor='title'>Title:</label>
        <input name='title' type='text' id='title' onChange={handleChange} />
        <label htmlFor='url'>Photo URL:</label>
        <input name='url' type='text' id='url' onChange={handleChange} />
        <label htmlFor='thumbnailUrl'>Thumbnail Photo URL:</label>
        <input
          name='thumbnailUrl'
          type='text'
          id='thumbnailUrl'
          onChange={handleChange}
        />
        <div className='add-btn' onClick={addPic}>
          Add Photo!
        </div>
      </div>
      <div className='cover' onClick={goBack}></div>
    </>
  );
};

export default NewPicture;
