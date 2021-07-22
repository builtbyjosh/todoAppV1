import React from "react";

const Header = () => {
  return (
    <div style={{paddingBottom: 20}}>
      <h2 className="ui center aligned icon header">
        <i className="circular icon tasks"></i>
        Todo List
      </h2>
      <button className="ui button fluid ">Add Todo</button>
    </div>
  );
};

export default Header;
