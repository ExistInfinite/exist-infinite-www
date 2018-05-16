import React from 'react';
import { Route } from 'react-router-dom';
import GlobalNav from './components/GlobalNav';
import './App.module.scss';

import Home from './pages/Home';
import Kendrick from './pages/Kendrick';
import Vision from './pages/Vision';

const Component = () => (
  <div>
    <GlobalNav />
    <Route exact={true} path="/" component={Home}/>
    <Route path="/kendrick" component={Kendrick}/>
    <Route path="/vision" component={Vision}/>
  </div>
);

export default Component;
