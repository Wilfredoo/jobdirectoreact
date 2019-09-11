import React from "react";
import axios from "axios";
import { LanguageContext } from "./languageContext";



export default class LoginFacebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.facebookLogin = this.facebookLogin.bind(this);
    this.error;
  }

  facebookLogin() {
      console.log("facebooki");
      axios.get("/loginFacebook");

  }

  render() {
    return (
      <div className="container">

<h2 className="heading-1">{this.context.login.title}</h2>
<p className="text">{this.context.login.text}</p>
<div className="facebookContainer">
<button   ><a id="facebook-button" href="/loginFacebook" >{this.context.login.button}</a></button>
    </div>  </div>
    );
  }
}

LoginFacebook.contextType = LanguageContext;
