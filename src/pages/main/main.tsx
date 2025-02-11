import React from 'react';
import InsomeNavigate from './main-top/InsomeNavigate';
import MainContent from './main-middletop/maincontent';
import MainBlueContent from './main-middlebottom/mainbluecontent';
// import Bottom from './main-bottom/Bottom';

const Main: React.FC = () => {
    return (
        <>
            <InsomeNavigate/>
            <MainContent/>
            <MainBlueContent/>
            {/* <Bottom/> */}
            {/* top */} 
        </>
    );
};

export default Main;