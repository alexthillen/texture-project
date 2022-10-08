import Profile from 'components/About/Profile';
import Subtitle from 'components/Offer/Subtitle';
import Teaser from 'components/Template/Teaser';
import Main from 'layout/Main'
import React from 'react'

import * as text from "static/texts";
import profile1 from "../static/profile_pictures/profile_claude.jpg";
import profile2 from "../static/profile_pictures/profile_jeanne.jpg";


export default function About(props) {
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
        heading_fr={text.fr_about_title}
        heading_de={text.de_about_title}
        contents_fr=""
        contents_de=""
        button_fr=""
        button_de=""
        button_ref=""
      ></Teaser>

      <div id="offer-one-main" className="d-flex bg-light p-5 m-xl-3">
        {/* <div className="col-xl-2"></div> */}
        {/* MAIN Column */}
        <div className="col-xl-12">
          {/* Subtitle Component*/}
          <Subtitle text={ props.lang === "fr" ? text.fr_about_subtitle : text.de_about_subtitle }></Subtitle>
          <div className='d-flex row'>
            <Profile text_main={props.lang === "fr" ? text.fr_about_text_claude : text.de_about_text_claude} name="Claude Adam" linkedin={"https://www.linkedin.com/in/claude-adam-5bb44960/"} profile_picture={profile1}></Profile>
            <Profile text_main={props.lang === "fr" ? text.fr_about_text_jeanne : text.de_about_text_jeanne} name="Jeanne Adam" linkedin={"https://www.linkedin.com/in/jeanne-a-85988643/"} profile_picture={profile2}></Profile>
          </div>
        </div>
      </div>
    </Main>
  );
}
