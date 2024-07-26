import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        created_at: "something",
        avatar_url: "Dummy-pic"
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
    const { name, created_at, avatar_url } = this.state.userInfo;
    return (
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">Name: {name}</h2>
          <h3 className="text-md text-gray-500">Date: {new Date(created_at).toLocaleDateString()}</h3>
        </div>
        <div className="flex justify-center">
          <img className="w-32 h-32 rounded-full" src={avatar_url} alt="User avatar" />
        </div>
      </div>
    );
  }
}

export default UserClass;
