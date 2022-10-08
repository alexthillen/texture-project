import React from "react";
import Linkedin from "social_media/Linkedin";

import "./Profile.scss"

export default function Profile(props) {
  return (
      <div id="Profile" className="col-xl-5 mt-0 m-auto">
        <div className="col">
          <div className="col-xl-12 m-auto">
            <img
              src={props.profile_picture}
              alt="wrapkit"
              className=" rounded-5 mx-auto d-block"
            />
          </div>
          <div className="col-xl-12 text-center">
            <div className="pt-2">
              <h5 className="mt-4 font-weight-medium mb-0">{props.name}</h5>
              <p><em className="mb-3">Placeholder</em></p>
              <p>
                {props.text_main}
              </p>
              <ul className="list-inline mt-auto">
                <li className="list-inline-item">
                  <Linkedin href={props.linkedin}></Linkedin>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}
