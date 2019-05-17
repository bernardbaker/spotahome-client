import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import renderer from "react-test-renderer";
import { GET_HOME_CARD_QUERY } from "../../apollo";
import { Loading, NetworkError, NoCardData, CardListing } from "./CardListing";
import wait from "waait";

describe("<CardListing/>", () => {
  it("should render a JSX element for the loading state", () => {
    // Act
    const component = renderer.create(<Loading />);
    const tree = component.toJSON();
    // Assert
    expect(tree.children).toContain("Loading...");
  });

  it("should render a JSX element for the network error state", () => {
    // Act
    const component = renderer.create(<NetworkError />);
    const tree = component.toJSON();
    // Assert
    expect(tree.children).toContain("Network Error");
  });

  it("should render a JSX element for the loading state", () => {
    // Act
    const component = renderer.create(<NoCardData />);
    const tree = component.toJSON();
    // Assert
    expect(tree.children).toContain("No results");
  });

  it("should render a message while loading", () => {
    // Act
    const component = renderer.create(
      <MockedProvider mocks={[]} addTypename={false}>
        <CardListing />
      </MockedProvider>
    );
    const tree = component.toJSON();
    // Assert
    expect(tree.children).toContain("Loading...");
  });

  it("should render a server message in error", async () => {
    // Act
    const component = renderer.create(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <CardListing />
      </MockedProvider>
    );
    await wait(0);
    const tree = component.toJSON();
    // Assert
    expect(tree.children).toContain("Network Error");
  });

  it("should render a message when no cards are available", async () => {
    // Act
    const component = renderer.create(
      <MockedProvider mocks={emptyMocks} addTypename={false}>
        <CardListing />
      </MockedProvider>
    );
    await wait(0);
    const node = component.root.findByType("div");
    // Assert
    expect(node.children).toContain("No results");
  });

  it("should render without error", () => {
    // Act
    renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CardListing />
      </MockedProvider>
    );
  });
});

// Mock data response
const mocks = [
  {
    request: {
      query: GET_HOME_CARD_QUERY
    },
    result: {
      data: {
        homeCard: {
          adId: 1,
          currencySymbol: "€",
          photoUrls: {
            homecardHidpi: "https://tld.com/assets/image.jpg"
          },
          pricePerMonth: 400,
          title: "Modern room in 4-bedroom apartment in Aluche"
        }
      }
    }
  }
];
// Mock error response
const errorMocks = [
  {
    request: {
      query: GET_HOME_CARD_QUERY
    },
    error: new Error("Network Error")
  }
];
// Mock empty data response
const emptyMocks = [
  {
    request: {
      query: GET_HOME_CARD_QUERY
    },
    result: {
      data: {
        homeCard: {}
      }
    }
  }
];
