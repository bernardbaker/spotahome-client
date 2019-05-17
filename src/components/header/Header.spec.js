import React from "react";
import renderer from "react-test-renderer";
import Header from "./Header";

describe("<Header/>", () => {
  it("should render with errors", () => {
    renderer.create(<Header />);
  });

  it("should render the spotahome page title", () => {
    // Act
    const component = renderer.create(<Header />);
    const instance = component.root;

    // Assert card HTML element classes
    expect(instance.findByProps({ className: "app-header" })).not.toBeNull();
  });

  it("should render the header links", () => {
    // Arrange
    const props = {
      title: "Spotaroom",
      links: [
        {
          title: "Spotaroom company information",
          label: "Company",
          target: "_self",
          url: "/company"
        },
        {
          title: "How we do things at Spotaroom",
          label: "How we work",
          target: "_self",
          url: "/how-we-work"
        },
        {
          title: "How to contact us",
          label: "Contact us",
          target: "_self",
          url: "/contact-us"
        }
      ]
    };
    // Act
    const component = renderer.create(<Header {...props} />);
    const instance = component.root;

    // Assert card HTML element classes
    expect(instance.findByProps({ className: "app-header" })).not.toBeNull();
  });
});
