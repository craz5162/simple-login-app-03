import React from 'react';
import { Outlet } from 'react-router-dom';
import Main from './Main';

const Header = () => {
      return (
            <div>
                  <Main></Main>
                  <Outlet></Outlet>
            </div>
      );
};

export default Header;