import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LanguageContext } from "./languageContext";
import StripeButton3 from "./stripebutton3.js";

export default class PremiumModal extends React.Component {
    render() {
        return (
            <div>
                <div onClick={this.props.close} className="backgroundBlock" />

                <div className="deleteModal">
                    <h1 className="heading-1 deleteModalTitle">
                        {this.context.premiumModal.title}
                    </h1>
                    <StripeButton3 />
                    <div>
                        <button
                            onClick={this.props.close}
                            className="buttonOpaque premiumDeny">
                            {this.context.premiumModal.deny}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

PremiumModal.contextType = LanguageContext;
