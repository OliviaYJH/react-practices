import React from 'react';
import * as styles from '../assets/scss/component/Guestbook.scss';
import {SiteLayout} from '../assets/scss/layout';

export default function Guestbook() {
    return (
        <SiteLayout>
            <div className={styles.Guestbook}>
                <h2>Guestbook</h2>
            </div>
        </SiteLayout>
    );
}