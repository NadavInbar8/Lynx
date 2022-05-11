import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './assets/styles/main.scss';
import { Homepage } from './pages/Homepage/Homepage';
import Picture from './pages/Picture/Picture';
import { loadPhotos } from './store/picture.action';

export function RootCmp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhotos());
  }, []);

  return (
    <main className='main-app-layout flex'>
      <Routes>
        <Route exact path={'/'} element={<Homepage />}>
          <Route path='/:photoId' element={<Picture />} />
        </Route>
      </Routes>
    </main>
  );
}
