import { useState } from "react";
const User = (props) => {

    const [count] = useState(0);
    const [count2] = useState(1);

  return (
    <div className="user-card">
        <h1>count ={count}</h1>
        <h1>count2 ={count2}</h1>
      <h2>{props.name}</h2>
      <h2>Age : 24</h2>
    </div>
  );
};

export default User;
