import React, { useEffect } from "react";
import { Container, Segment } from "semantic-ui-react";
import Part1 from "../src/Part1/Part1.js";
import Part2 from "./Part2/Part2.js";
import Part3 from "./Part3/Part3.js";
import Part4 from "./Part4/Part4.js";
import Part5 from "./Part5/Part5.js";
import Part6 from "./Part6/Part6.js";
import Part7 from "./Part7/Part7.js";
import Part8 from "./Part8/Part8.js";
import Part9 from "./Part9/Part9.js";
import Part10 from "./Part10/Part10.js";
import Part14 from "./Part14/Part14.js";
import Part11 from "./Part11/Part11.js";
import Part12 from "./Part12/Part12.js";
import Part13 from "./Part13/Part13.js";

import firebase from "firebase";

function App() {
  // const handleClick = () => {
  //   let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container");
  //   let number = "+919553426238";
  //   firebase
  //     .auth()
  //     .signInWithPhoneNumber(number, recaptcha)
  //     .then((e) => {
  //       let code = prompt("enter otp");
  //       if (code == null) {
  //         return;
  //       }
  //       e.confirm(code).then((res) => {
  //         console.log(res, "................");
  //       });
  //     })
  //     .catch(() => {
  //       console.log("error");
  //     });
  // };

  return (
    <Container>
      <Segment>
        <div id="recaptcha-container"></div>
        {/* <button onClick={handleClick}>Click Me</button> */}
      </Segment>
    </Container>
  );
}

export default App;
