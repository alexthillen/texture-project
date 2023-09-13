import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SingleService.scss";

class SingleOfferedService extends Component {

  getOfferPath() {
    let nr = parseInt(this.props.id, 10) + 1;
    return "/" + this.props.lang + "/offer-0" + nr;
  }

  render() {
    return (

      <div className={`col-lg-6 px-0 align-self-stretch`}>
        <div style={this.props.style} className={`bg-light text-center h-100 d-flex flex-column align-items-center pb-3 ${this.props.className}`}>
          <div className="my-3">
            <h2 className="">{this.props.heading}</h2>
          </div>
          <div className="bg-light shadow-sm"></div>
          <div id="children" className="mb-3 mt-auto">
            {this.props.children}
          </div>
          <Link
            className={"btn btn-sm btn-outline-secondary mt-auto d-block"}
            key={this.props.id}
            to={"/" + this.props.lang + "/" + this.props.id}
          >
            {this.props.lang === "fr" ? "Plus" : "Mehr"}
          </Link>
        </div>
      </div>

    );
  }
}

export default SingleOfferedService;
