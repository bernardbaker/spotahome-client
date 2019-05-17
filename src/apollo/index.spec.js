import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import renderer from "react-test-renderer";
import { GET_HOME_CARDS_QUERY, GET_HOME_CARD_IDS_QUERY } from "./index";

const mocks = [
  {
    request: {
      query: GET_HOME_CARDS_QUERY
    },
    result: {
      data: {
        homecards: [
          {
            adId: 1,
            currencySymbol: "€",
            photoUrls: {
              homecardHidpi: "https://tld.com/assets/image.jpg"
            },
            pricePerMonth: 400,
            title: "Modern room in 4-bedroom apartment in Aluche"
          },
          {
            adId: 2,
            currencySymbol: "€",
            photoUrls: {
              homecardHidpi: "https://tld.com/assets/image.jpg"
            },
            pricePerMonth: 500,
            title: "Modern room in 5-bedroom apartment in Aluche"
          }
        ]
      }
    }
  }
];

const mocksRequesForIds = [
  {
    request: {
      query: GET_HOME_CARD_IDS_QUERY
    },
    result: {
      data: {
        homeCardsId: [
          {
            id: "154873"
          },
          {
            id: "121422"
          },
          {
            id: "86637"
          },
          {
            id: "135210"
          },
          {
            id: "154870"
          },
          {
            id: "121427"
          },
          {
            id: "121416"
          },
          {
            id: "86362"
          },
          {
            id: "93861"
          },
          {
            id: "221612"
          },
          {
            id: "221614"
          },
          {
            id: "221615"
          },
          {
            id: "93859"
          },
          {
            id: "130849"
          },
          {
            id: "116096"
          },
          {
            id: "93852"
          },
          {
            id: "130844"
          },
          {
            id: "130847"
          },
          {
            id: "157543"
          },
          {
            id: "210460"
          },
          {
            id: "130843"
          },
          {
            id: "130846"
          },
          {
            id: "93851"
          },
          {
            id: "116092"
          },
          {
            id: "103109"
          },
          {
            id: "204857"
          },
          {
            id: "202768"
          },
          {
            id: "221110"
          },
          {
            id: "140843"
          },
          {
            id: "224836"
          }
        ]
      }
    }
  }
];

it("renders without error", () => {
  renderer.create(<MockedProvider mocks={mocks} addTypename={false} />);
});

it("renders without error", () => {
  renderer.create(
    <MockedProvider mocks={mocksRequesForIds} addTypename={false} />
  );
});
