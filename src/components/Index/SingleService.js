import React, { Component } from "react";
import "./SingleService.scss";

class SingleOfferedService extends Component {
  constructor(props) {
    super(props);
  }

  getOfferPath() {
    let nr = parseInt(this.props.id, 10) + 1;
    return "/" + this.props.lang + "/offer-0" + nr;
  }

  render() {
    return (
      <div className={" col-md-6 align-self-stretch mb-md-3"}>
        <div className="bg-light text-center h-100 d-flex flex-column align-items-center pb-3">
          <div className="my-3 ">
            <h2 className="">{this.props.heading}</h2>
          </div>
          <div className="bg-light shadow-sm"></div>
          {this.props.children}
          <a
            className={"btn btn-sm btn-outline-secondary mt-auto d-block"}
            href={this.getOfferPath()}
          >
            {this.props.lang === "fr" ? "Plus" : "Mehr"}
          </a>
        </div>
      </div>
    );
  }
}

export default SingleOfferedService;
