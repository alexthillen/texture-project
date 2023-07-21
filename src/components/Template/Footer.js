import React, { Component } from 'react';
import "./Footer.scss"
import logo from 'static/logos/TEXTURE_LOGO_WEB_CROPPED.jpeg';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resources: {
        id: 1,
        heading_fr: 'Conseil, coaching et gestion de projet',
        heading_de: 'Beratung, Coaching und Projektmanagement',
        text_fr: "Dans les domaines de l'éducation, de l'enseignemen…ojets de l’idée initiale à la réalisation finale.",
        text_de: 'In den Bereichen Bildung, Lehre und Hochschule beg…te von der ersten Idee bis zur finalen Umsetzung.',
        bg_color: "bg-light"
      }
    }
  }


  renderResources() {
    var rows = [];
    for (var i = 0; i < this.state.resources.length; i++) {
      const heading_fr = this.state.resources[i].heading_fr;
      const heading_de = this.state.resources[i].heading_de;
      const jsx_elem = <li key={i}>
        <a className="text-muted" href={(this.props.lang === 'fr' ? 'fr/traduction-correction-redaction' : 'de/ubersetzen-lektorat-schreiben')}>
          {this.props.lang === 'fr' ? heading_fr : heading_de}
        </a>
      </li>;
      rows.push(jsx_elem);
    }
    return rows;
  }

  render() {
    return (
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top m-md-3">
        <div className="col-md-4 d-flex align-items-center m-auto">
          <div className='my-2 mx-auto'>
            <img src={logo} alt="Texture logo" className="logo-footer" style={{ width: "250px" }} />
          </div>
        </div>
        <div className="mb-3 mb-md-0 text-muted col-lg-4 text-center auto-margin">
          <div>© 2022 Texture, sàrl</div>
          <div>{this.props.lang === "fr" ? "Tél. " : "Tel"} <a href="tel:+352 691 320 556">+352 691320556</a></div> <div>{this.props.lang === "fr" ? "E-Mail" : "E-Mail"} <a href="mailto:info@texture.lu">info@texture.lu</a></div>
        </div>
        <div className="mb-3 mb-md-0 text-muted col-lg-4 text-center auto-margin">
          {this.props.lang === "fr" ? "développé par " : "entwickelt von "} <a href='https://www.linkedin.com/in/athillen/'>Alex Thillen</a>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            {/* <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlink:href="#twitter"></use>
                </svg>
              </a> */}
          </li>
          <li className="ms-3">
            {/* <a className="text-muted" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#instagram"></use>
                </svg>
              </a> */}
          </li>
          <li className="ms-3">
            {/* <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlink:href="#facebook"></use>
                </svg>
              </a> */}
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;