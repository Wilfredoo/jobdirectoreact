import React from "react";
import axios from "axios";
import { LanguageContext } from "./languageContext";
import { Link } from "react-router-dom";

export default class ModalJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pleaseLogin: false,
            reportedAlready: false,
            thanksForReporting: false,
            whoHasReported: ""
        };
        this.reportPost = this.reportPost.bind(this);
        this.getJobDetails = this.getJobDetails.bind(this);
        this.whoHasReported = this.whoHasReported.bind(this);
    }

    componentDidMount() {
        this.whoHasReported();
        this.getJobDetails();
        // console.log(
        //     "my props in didmount: ",
        //     this.props.whoReported.data.find(x => x.id === this.props.id)
        //         .whoreported.length
        // );
        console.log("id of this job", this.props.id);
        console.log("state in didmount: ", this.state);
    }

    whoHasReported() {
        axios.get("/whoHasReported/" + this.props.id).then(results => {
            console.log("resulti", results);
            results => {
                this.setState({
                    whoHasReported: "blah"
                });
            };
        });
    }

    getJobDetails() {
        axios.get("/getJobDetails/" + this.props.id).then(
            result => {
                this.setState({
                    jobData: result.data
                });
            },
            () => {
                // console.log("state in"this.state);
            }
        );
    }

    reportPost() {
        if (!this.props.clickerid) {
            console.log("log in firstllty and mostly");
            this.setState({
                pleaseLogin: true
            });
            return;
        }
        console.log("here my props im proud of em", this.props);
        console.log(
            "here is people who reported this post: ",
            this.state.jobData.data.whoreported
        );
        if (
            this.state.jobData.data.whoreported &&
            this.state.jobData.data.whoreported.includes(this.props.clickerid)
        ) {
            console.log("u can't report again man");
            this.setState({
                reportedAlready: true,
                thanksForReporting: false
            });
        } else {
            console.log("oh actually u can report");
            console.log("report post", this.props.id);
            axios.post("/reportPost/" + this.props.id).then(result => {
                console.log("good stuff");
                this.setState({
                    thanksForReporting: true
                });
                this.getJobDetails();
            });
        }
    }

    render() {
        if (!this.state.jobData) {
            return null;
        }
        console.log("state in render", this.state);
        return (
            <div>
                <div
                    onClick={this.props.close}
                    className="backgroundBlock"></div>
                <button onClick={this.props.close} className="modalButton">
                    <i className="fa fa-close" />
                </button>

                <main
                    className={
                        this.state.jobData.data.urgent === "true"
                            ? "urgentModal"
                            : "modal"
                    }>
                    <h1 id="title" className="heading-1">
                        <span className="heading-1 website">
                            ({this.context.jobForm.linkReferral})
                        </span>
                    </h1>
                    <table id="jobDetails">
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
                        \
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
                                {this.context.jobConfirm.typePay}
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
                                {this.context.jobConfirm.area}
                            </td>
                            <td className="jobDetailsText">
                                {this.state.jobData.data.area}
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
                                {this.context.jobConfirm.Contact}
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
                            <br />
                            <br />
                        </tr>
                    </table>
                    {this.props.facebookid !== null && (
                        <div className="modalStarDiv">
                            <img className="star" src="star.png" />
                            <p className="toolTipModalText">
                                {this.context.main.tooltip}
                            </p>
                        </div>
                    )}
                    {this.props.whoReported &&
                        this.props.whoReported.data &&
                        this.props.whoReported.data.find(
                            x => x.id === this.props.id
                        ).whoreported &&
                        this.props.whoReported.data.find(
                            x => x.id === this.props.id
                        ).whoreported.length > 5 && (
                            <div className="modalFlagDiv">
                                {" "}
                                <img className="flag" src="flag.png" />
                                <p className="text">
                                    {this.context.main.tooltip2}
                                </p>
                            </div>
                        )}
                    <div className="redFlagDiv">
                        <p className="text">
                            {this.context.modalJob.pleaseReport}
                        </p>
                    </div>
                    <div className="reportContainer">
                        <button
                            className="reportButton"
                            onClick={this.reportPost}>
                            <div className="reportDiv">
                                <p className="text reportText">
                                    {this.context.modalJob.report}
                                </p>
                                <img src="flag.png" className="redFlag" />
                            </div>
                        </button>
                        {this.state.thanksForReporting == true && (
                            <p className="redReportText">
                                {this.context.modalJob.thanksForReporting}
                            </p>
                        )}
                        {this.state.pleaseLogin == true && (
                            <div>
                                <p className="redReportText">
                                    {this.context.modalJob.pleaseLogin}{" "}
                                </p>
                                <Link className="callToLogin" to="/login">
                                    {this.context.modalJob.pleaseLogin2}
                                    &nbsp;
                                    <img
                                        className="star starJobForm"
                                        src="star.png"
                                    />
                                </Link>
                            </div>
                        )}

                        {this.state.reportedAlready == true && (
                            <p className="redReportText">
                                {this.context.modalJob.reportedAlready}
                            </p>
                        )}
                    </div>
                    <br />
                    <br />
                </main>
            </div>
        );
    }
}

ModalJob.contextType = LanguageContext;
