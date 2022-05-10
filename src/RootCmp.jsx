import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './assets/styles/main.scss';
import { Homepage } from './pages/Homepage/Homepage';
import Picture from './pages/Picture/Picture';

export function RootCmp() {
  return (
    <main className='main-app-layout flex'>
      <Switch>
        <Route exact path={'/'}>
          <Homepage />
        </Route>
        <Route path='/:id'>
          <Picture />
        </Route>
      </Switch>
    </main>
  );
}
