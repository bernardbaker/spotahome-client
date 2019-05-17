import ApolloClient, { gql } from "apollo-boost";

export const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000/graphql"
      : "https://spotahome-server.herokuapp.com/graphql"
});

export const GET_HOME_CARDS_QUERY = gql`
  query getHomeCards {
    homeCards {
      adId
      currencySymbol
      pricePerMonth
      photoUrls {
        homecardHidpi
      }
      title
    }
  }
`;
