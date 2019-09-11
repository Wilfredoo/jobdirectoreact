import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StripeButton from "./stripebutton.js";
import { LanguageContext } from "./languageContext";

export default class PrePayJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.cancelUrgency = this.cancelUrgency.bind(this);
        // this.wantsToPay = this.wantsToPay.bind(this);
    }

    cancelUrgency(event) {
        console.log("someone does not want to pay");
        event.preventDefault();
        axios.post("/cancelUrgency").then(resp => {
            this.props.history.push("/jobConfirm");
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="heading-1">{this.context.jobPayPage.title}</h1>
                <img className="prePayPics" src="topPost.png" />
                <p className="text">
                    {this.context.jobPayPage.text1} <br />
                    <br />
                    {this.context.jobPayPage.text2}
                    <br />
                    <br />
                </p>
                <div id="urgentCheckedButtons">
                    <StripeButton />
                    <br />
                    <button
                        onClick={this.cancelUrgency}
                        className="buttonBasic buttonOpaque">
                        {this.context.jobPayPage.buttonNO}
                    </button>
                    <div className="contactInfo">
                        <p>{this.context.contactInfo.contactInfo}</p>
                    </div>
                </div>
            </div>
        );
    }
}

PrePayJob.contextType = LanguageContext;
