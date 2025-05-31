import React from "react";
import Header from "../Container/Header";
import { UserClass } from "./UserClass";

class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <UserClass />
      </div>
    );
  }
}

export default About;
