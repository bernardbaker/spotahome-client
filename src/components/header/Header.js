import React from "react";
import "./Header.css";
import PropTypes from "prop-types";
import Link from "../link/Link";

const Header = props => (
  <header className="app-header">
    <h1 className="title">Spotaroom</h1>
    <nav className="nav">
      <>
        {props.links.map((link, index) => (
          <Link key={`${link.url}-${index}`} {...link} />
        ))}
      </>
    </nav>
  </header>
);

Header.defaultProps = {
  title: "Header title",
  links: [
    {
      title: "Spotaroom company information",
      label: "Company",
      target: "_self",
      url: "/company"
    },
    {
      title: "How we do things at Spotaroom",
      label: "How we work",
      target: "_self",
      url: "/how-we-work"
    },
    {
      title: "How to contact us",
      label: "Contact us",
      target: "_self",
      url: "/contact-us"
    }
  ]
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object)
};

export default Header;
