import React from "react";
import { LanguageContext } from "./languageContext";

import { Link } from "react-router-dom";

export class PostType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  }

  handleSubmit(event) {
      console.log("where this", this.state);
      if (this.state.posterStatus == "seeksJob") {
          this.props.history.push("/personForm");
      } else if (this.state.posterStatus == "offersService") {
      this.props.history.push("/serviceForm");
  } else {
      this.props.history.push("/jobForm");

  }
}

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h1 className="heading-1">{this.context.postType.title}</h1>
          <div className="postTypeOptions">
              <label className="text" htmlFor="seeksPeople">
                {this.context.postType.seeksPeople}
                <input
                  className="radio postTypeButton"
                  id="seeksPeople"
                  type="radio"
                  name="posterStatus"
                  value="seeksPeople"
                  onChange={this.handleChange}
                  required="required"
                />
              </label>
</div>
              <div className="postTypeOptions">

                <label className="text" htmlFor="seeksJob">
                  {this.context.postType.seeksJob}
                  <input
                  id="seeksJob"
                    className="radio postTypeButton"
                    type="radio"
                    name="posterStatus"
                    value="seeksJob"
                    onChange={this.handleChange}
                    required="required"
                  />
                </label>
                </div>

                <div className="postTypeOptions">


              </div>
              <input
              className="buttonBasic"
              type="submit"
              value={this.context.postType.button}
              />
              </form>
              </div>
    );
  }
}

PostType.contextType = LanguageContext;
