import React from 'react';
import {SiteLayout} from '../../assets/scss/layout';
import * as styles from '../../assets/scss/component/gallery/Gallery.scss';
import Header from './Header';

export default function Gallery() {
    return (
        <SiteLayout>
            <div className={styles.Gallery}>
                <Header />
                <p>갤러이 입니다.</p>                
            </div>
        </SiteLayout>
    );
} 