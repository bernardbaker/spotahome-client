import React from "react";
import PropTypes from "prop-types";
import "./Link.css";

const Link = props => (
  <a
    className="app-header-link"
    title={props.title}
    target={props.target}
    href={props.url}
    onClick={props.click}
  >
    {props.label}
  </a>
);

Link.defaultProps = {
  title: "Link title",
  label: "Label",
  target: "_self",
  url: "/page",
  click: () => {}
};

Link.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  click: PropTypes.func
};

export default Link;
