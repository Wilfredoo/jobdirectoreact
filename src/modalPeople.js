import React from "react";
import axios from "axios";
import { LanguageContext } from "./languageContext";

export default class ModalPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get("/getPeopleDetails/" + this.props.id).then(result => {
      console.log("result of details pip: ", result);
      this.setState({
        peopleData: result.data
      });
    });
  }

  render() {
    if (!this.state.peopleData) {
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
                {this.context.personModal.name}
              </td>
              <td className="jobDetailsText">
                {this.state.peopleData.data.personname}
              </td>
            </tr>

            {this.state.peopleData.data.personstatus === "seeksJob" && (
              <tr>
                {" "}
                <td className="jobDetailsText">
                  {this.context.personModal.status1}
                </td>
                <td className="jobDetailsText">
                  {this.state.peopleData.data.personskill}
                </td>
              </tr>
            )}

            {this.state.peopleData.data.personstatus === "offersService" && (
              <tr>
                {" "}
                <td className="jobDetailsText">
                  {this.context.personModal.status2}
                </td>
                <td className="jobDetailsText">
                  {this.state.peopleData.data.personskill}
                </td>
              </tr>
            )}

            <tr>
              {" "}
              <td className="jobDetailsText">
                {this.context.personModal.experience}
              </td>
              <td className="jobDetailsText">
                {this.state.peopleData.data.personexperience}
              </td>
            </tr>
            <tr>
              {" "}
              <td className="jobDetailsText">
                {this.context.personModal.schedule}
              </td>
              <td className="jobDetailsText">
                {this.state.peopleData.data.personschedule}
              </td>
            </tr>
            <tr>
              {" "}
              <td className="jobDetailsText">
                {this.context.personModal.area}
              </td>
              <td className="jobDetailsText">
                {this.state.peopleData.data.personarea}
              </td>
            </tr>
            <tr>
              {" "}
              <td className="jobDetailsText">
                {this.context.personModal.phone}
              </td>
              <td className="jobDetailsText">
                {this.state.peopleData.data.personnumber}
              </td>
            </tr>

            <tr>
              {" "}
              <td className="jobDetailsText">
                {this.context.personModal.extraInfo}
              </td>
              <td className="jobDetailsText">
                {this.state.peopleData.data.personextrainfo}
              </td>
            </tr>
          </table>
        </main>
      </div>
    );
  }
}

ModalPeople.contextType = LanguageContext;
