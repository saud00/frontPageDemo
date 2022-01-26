import React from "react";
import SignIn from "./SignIn";
import Reg from "./Reg";

function Index() {
  const [newUser, setNewUser] = React.useState(true);

  return newUser ? (
    <Reg setNewUser={setNewUser} />
  ) : (
    <SignIn setNewUser={setNewUser} />
  );
}

export default Index;
