import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './Layout/Header';
import MainProgress from './Layout/Main-progress';
import MainRecommend from './Layout/Main-recommend';
import MainIntroduce from './Layout/Main-introduce';
import Contact from './Layout/Contact';
import Footer from './Layout/Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MainProgress />
    <MainRecommend />
    <MainIntroduce />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
