import InsomeTop from '../../Component/NotmainTop/InsomeTop';
import MainBlueContent from '../main/main-middlebottom/mainbluecontent';
import React from 'react';
import ServiceContent from './servicecontent/ServiceContent';

const Service: React.FC = () => {
    return (
        <>     
        <InsomeTop/>
        <ServiceContent/>
        <MainBlueContent/>
        </>
    );
};

export default Service;