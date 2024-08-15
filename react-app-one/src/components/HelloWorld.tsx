import React from "react";

type HelloWorldProps = {
    firstName: string;
    lastName: string;
  };

const HelloWorld: React.FC<HelloWorldProps> = ({ firstName, lastName }) => {

    return (
      <>
        Hello <b>{firstName} {lastName}</b> <br/>
      </>
    );
  }
  
  export default HelloWorld;