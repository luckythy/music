import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/index'
import './static/iconfont/iconfont.css'
import './static/js/rem'
import './static/css/reset.css'
import './static/css/home.scss'
import './static/css/recommend.scss'
import './static/css/rank.scss'
import './static/css/songsheet.scss'
import './static/css/dj.scss'
import './static/css/search.scss'
import './static/css/my.scss'
import './static/css/video.scss'
import './static/css/player.scss'
import './static/css/skin.scss'
import './static/css/common.scss'

import App from './App.jsx';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
