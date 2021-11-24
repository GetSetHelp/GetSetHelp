import "./InteractiveForm.css";
import React from "react";
import axios from "axios";
import { ConversationalForm } from "conversational-form";
import formFields from "./formFields.js";
export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.submitCallback = this.submitCallback.bind(this);
  }

  componentDidMount() {
    this.cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
        // loadExternalStyleSheet: false
      },
      tags: formFields,
    });
    this.elem.appendChild(this.cf.el);
  }

  submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);
    console.log("Formdata, obj:", formDataSerialized);

    this.cf.addRobotChatResponse(
      axios
        .post(
          `${process.env.REACT_APP_SERVER}/routes/user/signUpForm`,
          formDataSerialized
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  }

  render() {
    return (
      <div className="ConversationalForm fluid-container">
        <div ref={(ref) => (this.elem = ref)} />
      </div>
    );
  }
}
// function Home() {
//   return (
//     <div className="Login">
//       <h1>Home Page</h1>
//     </div>
//   );
// }
//
// export default Home;
