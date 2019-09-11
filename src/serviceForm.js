import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LanguageContext } from "./languageContext";


export class ServiceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  }

  handleSubmit(event) {
      console.log("are u a ghost", this.state);
    event.preventDefault();
    axios.post("/finalizeService", this.state).then(resp => {
      this.props.history.push("/PrePayPerson");
    });
  }

  render() {
    return (
      <div className="personForm">
        <form onSubmit={this.handleSubmit}>
          <h1 className="heading-1">JobDirecto</h1>
          <br />
          <p className="formQuestions">{this.context.serviceForm.serviceOwner}</p>
          <input
            className="formInputs"
            type="text"
            name="serviceOwner"
            defaultValue={
              this.state.serviceData && this.state.serviceData.data
                ? this.state.serviceData.data.serviceOwner
                : ""
            }
            required="required"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <p className="formQuestions"> {this.context.serviceForm.serviceOffered}</p>
          <input
            maxLength="30"
            className="formInputs bigInput"
            type="text"
            name="serviceOffered"
            defaultValue={
              this.state.serviceData && this.state.serviceData.data
                ? this.state.serviceData.data.serviceOffered
                : ""
            }
            required="required"
            onChange={this.handleChange}
          />



          <p className="formQuestions">{this.context.serviceForm.serviceNumber}</p>
          <input
            className="formInputs"
            type="text"
            name="serviceNumber"
            required="required"
            defaultValue={
              this.state.serviceData && this.state.serviceData.data
                ? this.state.serviceData.data.serviceNumber
                : ""
            }

            onChange={this.handleChange}
          />
          <p className="formQuestions">{this.context.serviceForm.serviceExtraInfo}</p>
          <textarea
          placeholder={this.context.serviceForm.placeholder}
            className="formInputs bigInput"
            type="text"
            name="serviceExtraInfo"
            defaultValue={
              this.state.serviceData && this.state.serviceData.data
                ? this.state.serviceData.data.serviceExtraInfo
                : ""
            }
            onChange={this.handleChange}
          />
          <br />
          {/**/}
          <br />
          <br />

          <br />
          <br />
          <br />
          <input
            className="buttonBasic"
            type="submit"
            value={this.context.serviceForm.button}
          />
          <br />
          <br />
          <div className="contactInfo"><p>{this.context.contactInfo.contactInfo}</p></div>

          <br />
        </form>
      </div>
    );
  }
}

ServiceForm.contextType = LanguageContext;
