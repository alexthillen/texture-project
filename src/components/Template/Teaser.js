import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Teaser.scss"


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
    if ((this.props.button_fr === "" || !this.props.button_fr) && (
      this.props.button_de === "" || !this.props.button_de)) {
      return;
    }
    if (this.props.lang === 'fr') {
      return <Link className={"btn btn-outline-secondary"} to={this.props.button_ref}>{this.props.button_fr}</Link>;
    } else if (this.props.lang === 'de') {
      return <Link className={"btn btn-outline-secondary"} to={this.props.button_ref}>{this.props.button_de}</Link>;
    }
  }

  fontCSS() {
    return this.props.heading_fr === "Texture" ? "big-font" : "";
  }


  render() {
    return (
      <div className="teaser position-relative overflow-hidden p-3 p-md-1 m-md-3 text-center box d-flex">
        <div className='bg-teaser '></div>
        {this.props.image ? <div className="align-middle col-lg-8 mx-auto mb-2 ">
          <div className='my-2'>
            <img src={this.props.image} alt='placeholder' />
          </div>
          {this.renderButton()}
        </div>
          :
          <div className="align-middle col-lg-8 mx-auto my-5 ">
            <h1 className={"fw-normal text-shadow " + this.fontCSS()}>{this.renderHeading()}</h1>
            {this.renderButton()}
          </div>}
      </div>

    );
  }
}

export default Teaser;