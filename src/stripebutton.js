import React, { useState } from "react";
import axios from "axios";

function StripeButton() {
  const stripe = Stripe("pk_live_5PjwBk9dSdW7htTKHQ3HKrTd");

  const wantsToPay = () => {
    console.log("i am working wantstoPay");
    event.preventDefault();
    axios.post("/wantsToPay").then(resp => {
      console.log("yes pay");
    });
  };

  const [error, setError] = useState();

  const handleClick = () => {
    stripe
      .redirectToCheckout({
        items: [{ sku: "sku_FAe7tbPK29byHW", quantity: 1 }],
        successUrl:
          window.location.protocol + "//www.jobdirecto.com/jobConfirm",
        cancelUrl:
          window.location.protocol + "//www.jobdirecto.com/StripeButton"
      })
      .then(result => {
        if (result.error) {
          setError(result.error.message);
        }
      });
  };

  return (
    <div>
      <button
        onClick={wantsToPay}
        id="UrgentCheckedButtonYES"
        onClick={handleClick}
      >
        SI <br /> (quiero pagar 10$ por un anuncio TOP)
      </button>
      <div>{error}</div>
    </div>
  );
}

export default StripeButton;
