import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Teaser extends Component {

  renderContents() {
    if (this.props.lang === 'fr') {
      return this.props.contents_fr;
    } else if (this.props.lang === 'de') {
      return this.props.contents_de;
    } else {
      return "Sorry. Not able to retrieve the requested text.";
    }
  }

  renderHeading() {
    if (this.props.lang === 'fr') {
      return this.props.heading_fr;
    } else if (this.props.lang === 'de') {
      return this.props.heading_de;
    } else {
      return "Sorry. Not able to retrieve the requested text.";
    }
  }

  renderButton() {
    if (this.props.lang === 'fr' && this.props.button_fr!== "") {
      return <Link className={"btn btn-outline-secondary"}  to={this.props.button_ref}>{this.props.button_fr}</Link>;
    } else if (this.props.lang === 'de' && this.props.button_de !== "") {
      return <Link className={"btn btn-outline-secondary"}  to={this.props.button_ref}>{this.props.button_de}</Link>;
    } else {
      return ;
    }
  }


  
  render() {
      return (
        <div className="teaser position-relative overflow-hidden p-3 p-md-1 m-md-3 text-center bg-light box d-flex align-items-center">
          <div className="align-middle col-md-4 mx-auto my-5">
            <h1 className={"display-4 fw-normal m"}>{this.renderHeading()}</h1>
              {this.renderButton()}
          </div>
        </div>
      );
  }
}

export default Teaser;