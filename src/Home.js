import React from 'react';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import { FullPage, Slide } from 'react-full-page';
import Header from './Layout/Header';
import MainProgress from './Layout/Main-progress';
import MainConfig from './Layout/Main-config';
import MainRecommend from './Layout/Main-recommend';
import MainRequest from './Layout/Main-request';
import MainUsage from './Layout/Main-usage';
import MainIntroduce from './Layout/Main-introduce';
import MainReview from './Layout/Main-review';
import Contact from './Layout/Contact';

function Home(){
    return(
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
                <MainConfig />             
            </Slide>
            <Slide>
                <MainRequest />
            </Slide>
            <Slide>
                <MainUsage/>
            </Slide>
            <Slide>
                <MainRecommend />  
            </Slide>
            <Slide>
                <MainReview />
            </Slide>
            <Slide>
                <Contact />
            </Slide>
        </FullPage>
    );
}

export default Home;