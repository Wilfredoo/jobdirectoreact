import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

export default class UrgentChecked2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // if urgent is not checked, then do this
    event.preventDefault();
    axios.post("/finalizeJob", this.state).then(resp => {
      this.props.history.push("/jobConfirm");
      if (resp.data.success) {
      }
    });
    // if urgent is checked, then redirecto to new component
  }

  render() {
    return (
      <div id="urgentCheckedContainer">
        <h1 id="UrgentCheckedTitle">Usted a marcado anuncio amarillo</h1>
        <p className="UrgentCheckedText">
          Aun no tenemos listo el sistema de pago asi que le daremos el anuncio
          amarillo gratis. <br />
          <br />
        </p>
        <button onClick={this.handleSubmit} className="UrgentCheckedButton">
          Ok
        </button>
      </div>
    );
  }
}