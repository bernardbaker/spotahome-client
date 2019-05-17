import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import renderer from "react-test-renderer";
import { GET_HOME_CARDS_QUERY } from "./index";

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

it("renders without error", () => {
  renderer.create(<MockedProvider mocks={mocks} addTypename={false} />);
});
