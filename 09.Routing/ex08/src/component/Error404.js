import React from 'react';
import {SiteLayout} from '../assets/scss/layout';

export default function Error404() {
    return (
        <SiteLayout>
            <div style={{lineHeight: '200px', textAlign: 'center'}}>
                <h2>Error 404</h2>
            </div>
        </SiteLayout>
    );
}