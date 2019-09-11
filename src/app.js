import React, { contextType } from "react";
import axios from "axios";
import { JobConfirm } from "./jobConfirm.js";
import { JobForm } from "./jobForm.js";
import { PersonForm } from "./personForm.js";
import PremiumBuy from "./premiumBuy.js";
import PremiumSet from "./premiumSet.js";

import { PostType } from "./postType.js";
import PrePayPerson from "./prePayPerson.js";
import { PersonConfirm } from "./personConfirm.js";
import { Jobs } from "./jobs.js";
import LoginFacebook from "./loginFacebook.js";
import PrePayJob from "./prePayJob.js";
import { BrowserRouter, Route } from "react-router-dom";
import ReactGA from "react-ga";
import { LanguageContext, languages } from "./languageContext";
import LanguageButton from "./languageButton";

function initializeReactGA() {
    ReactGA.initialize("UA-129656531-1");
    ReactGA.pageview("/homepage");
}

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            languages: languages.spanish
        };
        this.toggleLanguage = () => {
            this.setState(state => ({
                languages:
                    state.languages === languages.spanish
                        ? languages.english
                        : languages.spanish
            }));
        };
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <LanguageContext.Provider value={this.state.languages}>
                        <LanguageButton changeLanguage={this.toggleLanguage} />
                        <Route path="/prePayJob" component={PrePayJob} />
                        <Route path="/premiumBuy" component={PremiumBuy} />
                        <Route path="/premiumSet" component={PremiumSet} />

                        <Route path="/login" component={LoginFacebook} />
                        <Route path="/jobConfirm" component={JobConfirm} />
                        <Route
                            path="/job/:id"
                            render={props => (
                                <JobDetails {...props} key={props.match.url} />
                            )}
                        />
                        <Route exact path="/" component={Jobs} />
                        <Route path="/personForm" component={PersonForm} />

                        <Route path="/jobForm" component={JobForm} />
                        <Route path="/prepayPerson" component={PrePayPerson} />
                        <Route path="/postType" component={PostType} />
                        <Route
                            exact="exact"
                            path="/personConfirm"
                            component={PersonConfirm}
                        />
                    </LanguageContext.Provider>
                </div>
            </BrowserRouter>
        );
    }
}
