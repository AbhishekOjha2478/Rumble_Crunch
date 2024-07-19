import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        Name: "dummy",
        Date: "something",
        Avtar_url: "Dummy-pic"
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/AbhishekOjha2478");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const {name, created_at, avatar_url} =  this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h2>Date: {created_at}</h2>
        <img src= {avatar_url}></img>
      </div>
    );
  }
}

export default UserClass;
