import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = props => (
  <div className="card">
    <div className="card-image-title-and-price">
      <img
        src={props.photoUrls.homecardHidpi}
        width="160"
        height="80"
        alt={props.title}
      />
      <h1 className="card-title">{props.title}</h1>
      <h2 className="card-price">
        {props.pricePerMonth}
        {props.currencySymbol}
      </h2>
    </div>
    <div className="card-buttons">
      <button
        type="button"
        className="card-more-details-button"
        onClick={props.moreButtonDetailsButtonClick}
      >
        {props.moreButtonDetailsLabel}
      </button>
      <button
        type="button"
        className="card-book-now-button"
        onClick={props.bookNowButtonClick}
      >
        {props.bookNowButtonLabel}
      </button>
    </div>
  </div>
);

Card.defaultProps = {
  adId: 1,
  currencySymbol: "€",
  photoUrls: {
    homecardHidpi: "https://tld.com/assets/image.jpg"
  },
  pricePerMonth: 400,
  title: "Modern room in 4-bedroom apartment in Aluche",
  moreButtonDetailsLabel: "More details",
  bookNowButtonLabel: "Book now!",
  moreButtonDetailsButtonClick: () => {},
  bookNowButtonClick: () => {}
};

Card.propTypes = {
  adId: PropTypes.number.isRequired,
  currencySymbol: PropTypes.string.isRequired,
  photoUrls: PropTypes.objectOf(PropTypes.string).isRequired,
  pricePerMonth: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  moreButtonDetailsLabel: PropTypes.string,
  bookNowButtonLabel: PropTypes.string,
  moreButtonDetailsButtonClick: PropTypes.func,
  bookNowButtonClick: PropTypes.func
};

export default Card;
