import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import * as text from "static/texts";
import textureLogo from "static/logos/TEXTURE_LOGO_WEB_BIG_CROPPED_NO_BG.png";

// import Hamburger from './Hamburger';
import routes from "routes/routes";

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = (props) => {
  return (
    <header id="header">
      <nav className="px-2 navbar navbar-expand-lg navbar-light bg-light-dark">
        <div className="bg-light-dark"></div>
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link to={"/" + props.lang + "/"} className="navbar-brand">
              <img
                src={textureLogo}
                alt="Texture Logo"
                className="img-fluid"
              />
            </Link>
          </div>
          {routes
            .filter((l) => l.index && l.lang === props.lang)
            .map((l) => (
              <Link
                className="padding-md navbar-brand"
                key={l.label}
                to={l.path}
              >
                {l.label}
              </Link>
            ))}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {routes
                .filter((l) => !l.index && l.lang === props.lang)
                .map((l) => (
                  <li className="nav-item active" key={l.label}>
                    {/* <a class="nav-link" href={l.path}>{l.label}</a> */}
                    <Link className="nav-link" to={l.path}>
                      {l.label}
                    </Link>
                  </li>
                ))}
            </ul>

            {text.language_toggle_enabled ? (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-inline" >
                {/* Language Selection */}
                <li className="nav-item dropdown d-inline">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    className="nav-link dropdown-toggle"
                    href=""
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {props.lang === "fr" ? "Langue" : "Sprache"}
                  </a>
                  <ul
                    className="dropdown-menu"
                    // @ts-ignore
                    style={{ "--bs-dropdown-min-width": "0rem" }}
                    aria-labelledby="navbarDropdown"
                  >
                    <li className="">
                      <Link
                        className="dropdown-item"
                        to={"/fr/" + window.location.hash.substring(5)}
                      >
                        {" "}
                        {/* TODO : Change this window location to hash!*/}
                        Français
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to={"/de/" + window.location.hash.substring(5)}
                      >
                        Deutsch
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </nav>

      {/* <Hamburger /> */}
    </header>
  );
};

export default Navigation;
