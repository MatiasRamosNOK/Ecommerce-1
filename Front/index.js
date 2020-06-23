//ESTOY EN LA RAMA MATI
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import Main from './componentes/Main';
import store from './store/index'


ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  );