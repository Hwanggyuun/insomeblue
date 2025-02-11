import InsomeTop from '../../Component/NotmainTop/InsomeTop'
import MainBlueContent from '../main/main-middlebottom/mainbluecontent';

import React from 'react';
import styles from './Client.module.css';

const Client: React.FC = () => {
    return (
        <>
        <InsomeTop/>
        <img src='/Subclient.jpg' alt='sub' className={styles.img} />
        <MainBlueContent/>
        </>
    );
};

export default Client;