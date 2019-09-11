import React from "react";
import axios from "axios";
import { LanguageContext } from "./languageContext";
import { Link } from "react-router-dom";
import StripeButton3 from "./stripebutton3.js";

export default class PremiumBuy extends React.Component {
    render() {
        return (
            <div className="container">
                <p className="text">
                    {" "}
                    Las cuentas premium por ahora solo cuestan 5 dolares al mes.
                    Este precio probablemente subira pronto.
                    <br />
                    <br />
                    Solo las cuentas premium pueden cerrar sus anuncios. Pronto
                    tambien podran editar sus anuncios y tendran un TOP post
                    gratuito cada mes.
                    <br />
                    <br />
                    Puede cancelar su cuenta premium cuando desee
                </p>
                <div className="PrePayPersonButtons">
                    <StripeButton3 />

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

PremiumBuy.contextType = LanguageContext;
