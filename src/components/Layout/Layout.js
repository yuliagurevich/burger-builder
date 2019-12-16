import React from 'react';

import ClassStyles from './Layout.module.css';

const Layout = ({ children }) => (
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={ClassStyles.Content}>
            {children}
        </main>
    </>
);

export { Layout };