import React from 'react';

const Header = ({ children }) => {
  return (
    <header>
      <div className="header-content">
        <h1>软件导航平台</h1>
        {children}
      </div>
    </header>
  );
};

export default Header;