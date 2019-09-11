import React from "react";
import axios from "axios";
import { LanguageContext } from "./languageContext";

export default class ModalService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get("/getServiceDetails/" + this.props.id).then(result => {
      console.log("result of details pip: ", result);
      this.setState({
        serviceData: result.data
    }, () => {
        console.log("is there anything here MODAL?", this.state);
    });
    });
  }

  render() {
    if (!this.state.serviceData) {
      return null;
    }
    return (
      <div>
      <div onClick={this.props.close} className="backgroundBlock">
      </div>
      <button onClick={this.props.close} className="modalButton">
        <i className="fa fa-close" />
      </button>
        <main className="modalPeople">
          <table id="jobDetails">
            <tr>
              <td className="jobDetailsText">
                {this.context.serviceModal.name}
              </td>
              <td className="jobDetailsText">
                {this.state.serviceData.data.serviceowner}
              </td>
            </tr>

              <tr>
                {" "}
                <td className="jobDetailsText">
                  {this.context.serviceModal.serviceOffered}
                </td>
                <td className="jobDetailsText">
                  {this.state.serviceData.data.serviceoffered}
                </td>
              </tr>

            <tr>
              {" "}
              <td className="jobDetailsText">
                {this.context.serviceModal.serviceNumber}
              </td>
              <td className="jobDetailsText">
                {this.state.serviceData.data.servicenumber}
              </td>
            </tr>
            <tr>
              {" "}
              <td className="jobDetailsText">
                {this.context.serviceModal.serviceExtraInfo}
              </td>
              <td className="jobDetailsText">
                {this.state.serviceData.data.serviceextrainfo}
              </td>
            </tr>

          </table>
        </main>
      </div>
    );
  }
}

ModalService.contextType = LanguageContext;
