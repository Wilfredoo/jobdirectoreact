import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LanguageContext } from "./languageContext";

export class JobConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get("/getJobInfo").then(result => {
            if (result.data.success == false) {
                return null;
            } else {
                this.setState({
                    jobData: result.data
                });
            }
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        console.log("aliens");
        event.preventDefault();
        axios.post("/publishJob", this.state).then(resp => {
            console.log("common");
            if (resp.data.success) {
                console.log("success?");
                this.setState({
                    jobData: ""
                });
                this.props.history.push("/");
            }
        });

        axios.post("/minusCounter").then(resp => {
            console.log("/minus meow");
        });
    }

    render() {
        if (!this.state.jobData) {
            return null;
        }

        return (
            <div className="jobConfirmPage">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="confirmTitle" className="heading-1">
                        {this.context.jobConfirm.title}
                    </h1>

                    <table>
                        <tr>
                            <td className="jobDetailsText">
                                {this.context.jobConfirm.name}
                            </td>
                            <td className="jobDetailsText">
                                {this.state.jobData.data.restname}
                            </td>
                        </tr>
                        <tr>
                            <td className="jobDetailsText">
                                {this.context.jobConfirm.position}
                            </td>
                            <td className="jobDetailsText">
                                {this.state.jobData.data.jobtype}
                            </td>
                        </tr>

                        <tr>
                            <td className="jobDetailsText">
                                {this.context.jobConfirm.payment}
                            </td>
                            <td className="jobDetailsText">
                                {this.state.jobData.data.hourpay}
                            </td>
                        </tr>
                        <tr>
                            <td className="jobDetailsText">
                                {this.context.jobConfirm.payType}
                            </td>
                            <td className="jobDetailsText">
                                {this.state.jobData.data.typepay}
                            </td>
                        </tr>
                        <tr>
                            <td className="jobDetailsText">
                                {this.context.jobConfirm.schedule}
                            </td>
                            <td className="jobDetailsText">
                                {this.state.jobData.data.schedule}
                            </td>
                        </tr>
                        <tr>
                            <td className="jobDetailsText">
                                {this.context.jobConfirm.address}
                            </td>
                            <td className="jobDetailsText">
                                {this.state.jobData.data.address}
                            </td>
                        </tr>
                        <tr>
                            <td className="jobDetailsText">
                                {this.context.jobConfirm.phone}
                            </td>
                            <td className="jobDetailsText">
                                {this.state.jobData.data.phone}
                            </td>
                        </tr>
                        <tr>
                            <td className="jobDetailsText">
                                {this.context.jobConfirm.contact}
                            </td>
                            <td className="jobDetailsText">
                                {this.state.jobData.data.contact}
                            </td>
                        </tr>
                        <tr>
                            <td className="jobDetailsText">
                                {this.context.jobConfirm.extraInfo}
                            </td>
                            <td className="jobDetailsText">
                                {this.state.jobData.data.extrainfo}
                            </td>
                        </tr>
                    </table>

                    <div className="confirmButtons">
                        {/*  <Link to="/jobForm">
              <input className="btn-secondary" type="submit" value="Corregir" />
            </Link>*/}

                        <Link to="/">
                            <input
                                onClick={this.handleSubmit}
                                className="buttonBasic"
                                type="submit"
                                value={this.context.jobConfirm.button}
                            />
                        </Link>
                    </div>
                    <div className="contactInfo">
                        <p>{this.context.contactInfo.contactInfo}</p>
                    </div>
                </form>
            </div>
        );
    }
}

JobConfirm.contextType = LanguageContext;
