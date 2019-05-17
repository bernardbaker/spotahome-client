import React from "react";
import { GET_HOME_CARD_IDS_QUERY } from "../../apollo";
import { Query } from "react-apollo";
import { CardListing } from "./CardListing";
import "./Cards.css";

export const NetworkError = () => (
  <div className="network-error">Network Error</div>
);
export const NoCardData = () => <div className="no-data">No results</div>;
export const Loading = () => <p className="loading">Loading...</p>;

export const Cards = () => (
  <Query query={GET_HOME_CARD_IDS_QUERY}>
    {({ loading, error, data }) => {
      // handle error
      if (error) {
        return <NetworkError />;
      } else {
        // handle loading
        if (loading) return <Loading />;
        // handle no data
        if (!data.homeCardIds.length) return <NoCardData />;
        // handle no data
        if (data.homeCardIds.length) {
          return (
            <div className="card-container">
              {data.homeCardIds.map((item, index) => (
                <CardListing key={`${index}-${item.id}`} {...item} />
              ))}
            </div>
          );
        }
      }
    }}
  </Query>
);
