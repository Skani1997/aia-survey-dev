import React from 'react';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './Layout/Header';
import MainProgress from './Layout/Main-progress';
import MainRecommend from './Layout/Main-recommend';
import MainIntroduce from './Layout/Main-introduce';
import Contact from './Layout/Contact';
import Footer from './Layout/Footer';

function Home(){
    return(
        <>
            <Header />
            <MainProgress />
            <MainRecommend />
            <MainIntroduce />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;