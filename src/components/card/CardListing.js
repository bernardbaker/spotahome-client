import React from "react";
import { GET_HOME_CARD_QUERY } from "../../apollo";
import { Query } from "react-apollo";
import Card from "./Card";
import "./CardListing.css";

export const NetworkError = () => (
  <div className="card-listing-network-error">Network Error</div>
);
export const NoCardData = () => (
  <div className="card-listing-no-data">No results</div>
);
export const Loading = () => <p className="card-listing-loading">Loading...</p>;

export const CardListing = props => (
  <Query query={GET_HOME_CARD_QUERY} variables={{ id: +props.id }}>
    {({ loading, error, data }) => {
      // handle error
      if (error) {
        return <NetworkError />;
      } else {
        // handle loading
        if (loading) return <Loading />;
        // handle no data
        if (data.homeCard === null) return <NoCardData />;
        // handle no data
        if (data.homeCard) {
          return <Card {...data.homeCard} />;
        }
      }
    }}
  </Query>
);
