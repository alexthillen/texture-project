import Teaser from 'components/Template/Teaser';
import Main from 'layout/Main'
import React from 'react'

import * as text from "static/texts";

export default function Contact(props) {
  return (
    <Main
      title="Home"
      description=""
      // @ts-ignore
      lang={props.lang}
    >
      <Teaser
        fontColor="white"
        lang={props.lang}
        heading_fr={text.fr_contact_title}
        heading_de={text.de_contact_title}
        contents_fr=""
        contents_de=""
        button_fr=""
        button_de=""
        button_ref=""
      ></Teaser>



    </Main>
  );
}



