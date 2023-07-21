import Teaser from "components/Template/Teaser";
import Main from "layout/Main";
import React from "react";
import * as text from "static/texts";
//

import Subtitle from "components/Offer/Subtitle";
import PointForts from "components/Offer/PointForts";
import Entretien from "components/Offer/Entretien";
import Carousel from "components/Offer/Carousel";


const rc = require.context("../static/logos-clients/traduction");
const logos = rc.keys().map(rc);

export default function OfferOne(props) {
  return (
    <Main
      title="1"
      description=""
      // @ts-ignore
      lang={props.lang}
    >
      <Teaser
        fontColor="white"
        lang={props.lang}
        heading_fr={text.fr_offer01_title}
        heading_de={text.de_offer01_title}
        contents_fr=""
        contents_de=""
        button_fr=""
        button_de=""
        button_ref=""
      ></Teaser>

      <div id="offer-one-main" className="d-flex bg-light p-5 m-md-3">
        <div className="col-md-2"></div>
        {/* MAIN Column */}
        <div className="col-md-8">
          {/* Subtitle Component*/}
          <Subtitle
            text={
              props.lang === "fr"
                ? text.fr_offer01_subtitle
                : text.de_offer01_subtitle
            }
            intro={
              props.lang === "fr"
                ? text.fr_offer01_point_forts_intro
                : text.de_offer01_point_forts_intro
            }
          ></Subtitle>

          {/* Points forts components */}
          <PointForts
            intro2={
              props.lang === "fr"
                ? text.fr_offer01_point_forts_intro2
                : text.de_offer01_point_forts_intro2
            }
            point1={
              props.lang === "fr"
                ? text.fr_offer01_point_forts_point1
                : text.de_offer01_point_forts_point1
            }
            point2={
              props.lang === "fr"
                ? text.fr_offer01_point_forts_point2
                : text.de_offer01_point_forts_point2
            }
            point3={
              props.lang === "fr"
                ? text.fr_offer01_point_forts_point3
                : text.de_offer01_point_forts_point3
            }
          ></PointForts>

          {/* Entretien Component */}

          <Entretien
            text1={
              props.lang === "fr"
                ? text.fr_offer01_entretien_gratuit
                : text.de_offer01_entretien_gratuit
            }
            numero1={
              props.lang === "fr"
                ? text.fr_offer01_entretien_numero1
                : text.de_offer01_entretien_numero1
            }
            numero2={
              props.lang === "fr"
                ? text.fr_offer01_entretien_numero2
                : text.de_offer01_entretien_numero2
            }
            mail={
              props.lang === "fr"
                ? text.fr_offer01_entretien_mail
                : text.de_offer01_entretien_mail
            }
          ></Entretien>

          {/* Carousel Component */}

          <Carousel
            text={
              props.lang === "fr"
                ? text.fr_offer01_carousel_text
                : text.de_offer01_carousel_text
            }
            logos={logos}
          ></Carousel>
        </div>
      </div>
    </Main>
  );
}
