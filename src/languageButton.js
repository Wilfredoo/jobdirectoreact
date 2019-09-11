import React from "react";
import moment from "moment";

import { LanguageContext } from "./languageContext";

class LanguageButton extends React.Component {
  render() {
    return (
      <div id="translateButtonContainer">
        <button id="translateButton" onClick={this.props.changeLanguage}>
          {this.context.currentLanguage === "Español" ? "English" : "Español"}
        </button>
        <div id="dissapear">
          {" "}
          {this.context.currentLanguage === "Español"
            ? moment.locale("es")
            : moment.locale("en")}
        </div>
      </div>
    );
  }
}

LanguageButton.contextType = LanguageContext;

export default LanguageButton;
