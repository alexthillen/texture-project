import Teaser from "components/Template/Teaser";
import Main from "layout/Main";
import React from "react";

export default function OfferOne(props) {
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
        heading_fr="Traduction, correction, rédaction"
        heading_de="" // TODO
        contents_fr=""
        contents_de=""
        button_fr=""
        button_de=""
        button_ref=""
      ></Teaser>

      <div id="offer-one-main" className="d-flex">
        <div className="col-md-2"></div>
        <div className="col-md-8 border-top pt-3">
          <div id="subtitle" className="d-flex">
            <div className="col-md-0"></div>
            <div className="col-md-12">
            <em className="">
              Nous rédigeons, corrigeons, traduisons et affinons vos textes
              (allemand, français, anglais, luxembourgeois) avec compétence et
              efficacité.
            </em>
            </div>
          </div>
          <div className="border-top mt-3 pt-3">
            <p>
              Texture vous propose son expertise dans le domaine rédactionnel.
            </p>
          </div>
          <div>
            <p>Nos points forts :</p>
            <p>
              <ul>
                <li>
                  Expertise : Nous avons accumulé des années d’expérience en ce
                  qui concerne la correction, la rédaction et de la traduction
                  pour diverses publications avec nos clients au Luxembourg et
                  au-delà.
                </li>
                <li>
                  Multilinguisme : Nous offrons une communication et des
                  services en luxembourgeois, allemand, français et anglais. En
                  outre, nous travaillons en réseau avec des professionnels de
                  différents domaines et de différentes langues pour satisfaire
                  au mieux vos besoins.
                </li>
                <li>
                  Précision : Tout travail de texte demande une certaine
                  rigueur. Notre but est de vous fournir des textes facilement
                  lisibles, compréhensibles et d’une qualité linguistique
                  impeccable.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <p><em>
              <strong>
                Texture vous propose un entretien gratuit pour évaluer vos
                besoins. Demandez-nous un devis.
              </strong>
            </em>
            </p>
            <p>
              <a href="tel:+352 691 320 556">+352 691320556</a>
            </p>
            <p>
              <a href="info@texture.lu">info@texture.lu</a>
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
}
