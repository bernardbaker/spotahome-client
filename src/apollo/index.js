import ApolloClient, { gql } from "apollo-boost";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_LOCAL
    ? "http://localhost:4000/graphql"
    : "https://spotahome-server-v2.herokuapp.com/graphql"
});

export const GET_HOME_CARD_IDS_QUERY = gql`
  query getHomeCardIds {
    homeCardIds {
      id
    }
  }
`;

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

export const GET_HOME_CARD_QUERY = gql`
  query getAHomeCard($id: Int!) {
    homeCard(id: $id) {
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
