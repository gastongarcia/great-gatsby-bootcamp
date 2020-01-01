import React from "react";

const Header = props => {
  return (
    <header>
      <h1 className="text-5xl p-5">{props.siteTitle}</h1>
    </header>
  );
};

export default Header;
