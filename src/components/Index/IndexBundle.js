import React, { Component } from 'react';
import OfferedServices from './OfferedServices.js';
import textureLogo from "static/logos/TEXTURE_LOGO_WEB_BIG_NO_BG.png";

import Teaser from '../Template/Teaser.js'


class IndexBundle extends Component {

     render() {
          console.log("props Bundle" + this.props);
          return <div><Teaser
               image={textureLogo}
               fontColor="white"
               lang={this.props.lang}
               heading_fr="Texture"
               heading_de="Texture"
               contents_fr=''
               contents_de=''
          // button_fr='Sur Nous'
          // button_de='Über uns'
          // button_ref='about'
          ></Teaser>
               <OfferedServices lang={this.props.lang}></OfferedServices>
          </div>;
     }
}


export default IndexBundle;