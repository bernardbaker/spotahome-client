import React from "react";
import renderer from "react-test-renderer";
import Card from "./Card";

describe("<Card/>", () => {
  it("should render without error", () => {
    // Act
    renderer.create(<Card />);
  });

  it("should have a set of props", () => {
    // Act
    const component = renderer.create(<Card />);
    const instance = component.root;
    // Assert
    expect(instance.props.adId).toBe(1);
    expect(instance.props.currencySymbol).toBe("€");

    expect(instance.props.photoUrls).toStrictEqual({
      homecardHidpi: "https://tld.com/assets/image.jpg"
    });
    expect(instance.props.pricePerMonth).toBe(400);
    expect(instance.props.title).toBe(
      "Modern room in 4-bedroom apartment in Aluche"
    );
    expect(instance.props.moreButtonDetailsLabel).toBe("More details");
    expect(instance.props.bookNowButtonLabel).toBe("Book now!");
    expect(instance.props.moreButtonDetailsButtonClick).toBe(
      instance.props.moreButtonDetailsButtonClick
    );
    expect(instance.props.bookNowButtonClick).toBe(
      instance.props.bookNowButtonClick
    );
  });

  it("should renders with props", () => {
    // Arrange
    const props = {
      adId: 2,
      currencySymbol: "£",
      photoUrls: {
        homecardHidpi: "https://tld.com/assets/image.png"
      },
      pricePerMonth: 300,
      title: "A lovely modern room in 4-bedroom apartment in Aluche"
    };

    // Act
    const component = renderer.create(<Card {...props} />);
    const instance = component.root;

    // Assert card HTML element classes
    expect(instance.findByProps({ className: "card" })).not.toBeNull();
    expect(
      instance.findByProps({ className: "card-image-title-and-price" })
    ).not.toBeNull();
    expect(instance.findByProps({ className: "card-buttons" })).not.toBeNull();
    expect(instance.findByProps({ className: "card-title" })).not.toBeNull();
    expect(instance.findByProps({ className: "card-price" })).not.toBeNull();
    expect(
      instance.findByProps({ className: "card-more-details-button" })
    ).not.toBeNull();
    expect(
      instance.findByProps({ className: "card-book-now-button" })
    ).not.toBeNull();

    // Assert change in props
    expect(instance.props.adId).toBe(2);
    expect(instance.props.currencySymbol).toBe("£");

    expect(instance.props.photoUrls).toStrictEqual({
      homecardHidpi: "https://tld.com/assets/image.png"
    });
    expect(instance.props.pricePerMonth).toBe(300);
    expect(instance.props.title).toBe(
      "A lovely modern room in 4-bedroom apartment in Aluche"
    );
  });

  it("should renders and handle button clicks", () => {
    // Arrange
    const props = {
      adId: 1,
      currencySymbol: "€",
      photoUrls: {
        homecardHidpi: "https://tld.com/assets/image.jpg"
      },
      pricePerMonth: 400,
      title: "Modern room in 4-bedroom apartment in Aluche"
    };

    const mockClick = jest.fn(() => {
      console.log("clicked");
    });

    // Act
    const component = renderer.create(
      <Card
        {...props}
        moreButtonDetailsButtonClick={mockClick}
        bookNowButtonClick={mockClick}
      />
    );
    const instance = component.root;

    instance
      .findByProps({ className: "card-more-details-button" })
      .props.onClick();

    instance.findByProps({ className: "card-book-now-button" }).props.onClick();

    // Assert that button clicks work
    expect(mockClick).toHaveBeenCalledTimes(2);
  });
});
