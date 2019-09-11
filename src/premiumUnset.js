import React from "react";
import axios from "axios";

import { LanguageContext } from "./languageContext";

export default class PremiumUnSet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.setPremium = this.setPremium.bind(this);
        this.getUserStatus = this.getUserStatus.bind(this);
    }

    componentDidMount() {
        this.getUserStatus();
        console.log("what props is here?", this.props);
        axios.get("/user").then(result => {
            this.setState({ userId: result.data.id }, () => {
                console.log("id in state?", this.state.userId);
            });
        });
    }

    getUserStatus() {
        axios.get("/getUserStatus").then(result => {
            console.log("is this guy premium anot", result.data);
            this.setState({ userStatus: result.data }, () => {
                console.log("user status in state?", this.state.userStatus);
            });
        });
    }

    setPremium() {
        if (this.state.userStatus == "true") {
            console.log("well let's make him premium");
            axios.post("/unsetPremium").then(result => {
                this.props.history.push("/");
            });
        }
    }

    render() {
        return (
            <div className="container">
                <p className="text">
                    {" "}
                    Gracias por con confiar en JobDirecto!
                    <br />
                </p>
                <div className="PrePayPersonButtons">
                    <button
                        onClick={this.setPremium}
                        className="buttonBasic prePay">
                        Activar cuenta premium
                    </button>
                    <div className="contactInfo">
                        <p className="contactInfo">
                            {this.context.contactInfo.contactInfo}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

PremiumSet.contextType = LanguageContext;
