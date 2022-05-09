import { useEffect, useState } from 'react';
import { picturesService } from '../../services/picture.service';
import { useParams } from 'react-router-dom';
import './Picture.scss';

const Picture = ({ picture }) => {
  const [currPic, setCurrPic] = useState({ ...picture });
  const [title, setTitle] = useState('');
  const params = useParams();

  useEffect(() => {
    // console.log('in useEffect');
    console.log('currPic', currPic);
    // try {
    //   picturesService.putTitle(currPic);
    // } catch (err) {
    //   console.log('couldnt put: ', err);
    // }
  }, [currPic]);

  useEffect(() => {
    getPicture();
  }, []);

  const getPicture = async () => {
    const temp = await picturesService.getPictures();
    const tempPic = temp.filter((pict) => pict.id == params.id);
    setCurrPic(tempPic[0]);
  };

  const handleChange = ({ target }) => {
    const value = target.value;
    setTitle(value);
  };

  const putData = async (newTitle) => {
    setCurrPic({ ...currPic, title: newTitle });
    setTitle('');
  };

  return (
    <div>
      <h1>hello</h1>
      <h1>{currPic.title}</h1>
      <input
        type='text'
        placeholder={currPic.title}
        onChange={handleChange}
        onBlur={() => putData(title)}
      />
      <img src={currPic.url} alt='pic' />
    </div>
  );
};

export default Picture;
