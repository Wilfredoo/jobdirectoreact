import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StripeButton2 from "./stripebutton2.js";
import { LanguageContext } from "./languageContext";

export default class PrePayPerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.cancelPay = this.cancelPay.bind(this);
        // this.wantsToPay = this.wantsToPay.bind(this);
    }

    cancelPay(event) {
        console.log("someone does not want to pay");
        event.preventDefault();
        axios.post("/cancelPay").then(resp => {
            this.props.history.push("/");
        });
    }

    render() {
        return (
            <div className="container">
                <br />
                <br />

                <img className="prePayPics" src="personPost.png" />

                <p className="text">
                    {this.context.PrePayPerson.text1}
                    <br />
                    <br />
                    <span className="textHighlight">
                        {this.context.PrePayPerson.text2}
                    </span>{" "}
                    {this.context.PrePayPerson.text3}
                    <br />
                    <br />
                    <br />
                </p>
                <div className="PrePayPersonButtons">
                    <StripeButton2 />
                    <button
                        onClick={this.cancelPay}
                        className="buttonBasic buttonOpaque prePay">
                        {this.context.PrePayPerson.button}
                    </button>
                    <div className="contactInfo">
                        <p>{this.context.contactInfo.contactInfo}</p>
                    </div>
                </div>
            </div>
        );
    }
}

PrePayPerson.contextType = LanguageContext;
