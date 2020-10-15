import React from 'react';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import { FullPage, Slide } from 'react-full-page';
import Header from './Layout/Header';
import MainProgress from './Layout/Main-progress';
import MainRecommend from './Layout/Main-recommend';
import MainRequest from './Layout/Main-request';
import MainUsage from './Layout/Main-usage';
import MainEffect from './Layout/Main-effect';
import MainIntroduce from './Layout/Main-introduce';
import Contact from './Layout/Contact';
import Footer from './Layout/Footer';

function Home(){
    return(
        <>
        <FullPage>
            <Slide>
                <Header />
            </Slide>
            <Slide>
                <MainIntroduce />
            </Slide>
            <Slide>
                <MainProgress />             
            </Slide>
            <Slide>
                <MainRequest />
            </Slide>
            <Slide>
                <MainUsage/>
            </Slide>
            <Slide>
                <MainEffect/>
            </Slide>
            <Slide>
                <MainRecommend />  
            </Slide>
            <Slide>
                <Contact />
            </Slide>
                <Footer />
        </FullPage>
        
        </>
    );
}

export default Home;