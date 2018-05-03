import React from 'react';
import { Route } from 'react-router-dom';
import GlobalNav from './components/GlobalNav';
import Home from './pages/Home';

const Component = () => (
  <div>
    <GlobalNav />
    <Route exact={true} path="/" component={Home}/>
  </div>
);

export default Component;
