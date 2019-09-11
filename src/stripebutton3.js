import React, { useState } from "react";
import axios from "axios";
import { LanguageContext } from "./languageContext";
import { useContext } from "react";
import { fail } from "assert";

function StripeButton3() {
    let stripeKey, itemArray, successUrl, failUrl;

    if (window.location.hostname == "localhost") {
        stripeKey = "pk_test_868ha51gEUHT0PTaFFMXWHYT00AlPjWsY3";
        itemArray = "plan_FerG4ShuM9GS8D";
        successUrl = "//localhost:8080/premiumSet";
        failUrl = "//localhost:8080/StripeButton";
    } else {
        stripeKey = "pk_live_LLZx6k7fXk26iloU4qf46kvW00DNf15eOQ";
        itemArray = "plan_Fer31qkbJx0UYm";
        successUrl = "//www.jobdirecto.com/premiumSet";
        failUrl = "//www.jobdirecto.com/StripeButton";
    }

    const context = useContext(LanguageContext);

    const stripe = Stripe(stripeKey);

    const [error, setError] = useState();

    const handleClick = () => {
        stripe
            .redirectToCheckout({
                items: [{ plan: itemArray, quantity: 1 }],
                successUrl: window.location.protocol + successUrl,
                cancelUrl: window.location.protocol + failUrl
            })
            .then(result => {
                if (result.error) {
                    setError(result.error.message);
                }
            });

        console.log("someone wants to pay");
        event.preventDefault();
        axios.post("/wantsToPay").then(resp => {
            console.log("yes pay");
        });
    };

    return (
        <div>
            <button className="buttonBasic buttonPremium" onClick={handleClick}>
                {context.premiumModal.buyPremium}
                <br />
            </button>
            <div>{error}</div>
        </div>
    );
}

export default StripeButton3;
StripeButton3.contextType = LanguageContext;
