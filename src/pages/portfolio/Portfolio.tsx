import React from 'react';
import PortfolioMiddle from './portfoliomiddle/portfoliomiddle';
import InsomeTop from '../../Component/NotmainTop/InsomeTop';
import MainBlueContent from '../main/main-middlebottom/mainbluecontent';
const Portfolio: React.FC = () => {
    return (
        <>
        <InsomeTop/>
        <PortfolioMiddle/>
        <MainBlueContent/>
        </>
    );
};

export default Portfolio;   