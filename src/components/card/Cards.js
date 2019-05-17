import React from "react";
import { GET_HOME_CARDS_QUERY } from "../../apollo";
import { Query } from "react-apollo";
import Card from "./Card";
import "./Cards.css";

export const NetworkError = () => (
  <div className="network-error">Network Error</div>
);
export const NoCardData = () => <div className="no-data">No results</div>;
export const Loading = () => <p className="loading">Loading...</p>;

export const Cards = () => (
  <Query query={GET_HOME_CARDS_QUERY}>
    {({ loading, error, data }) => {
      // handle error
      if (error) {
        return <NetworkError />;
      } else {
        // handle loading
        if (loading) return <Loading />;
        // handle no data
        if (!data.homeCards.length) return <NoCardData />;
        // handle no data
        if (data.homeCards.length) {
          return (
            <div className="card-container">
              {data.homeCards.map((item, index) => (
                <Card key={`${index}-${item.adId}`} {...item} />
              ))}
            </div>
          );
        }
      }
    }}
  </Query>
);
