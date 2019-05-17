import React from "react";
import renderer from "react-test-renderer";
import Link from "./Link";

describe("<Link/>", () => {
  it("should render with errors", () => {
    // Act
    renderer.create(<Link />);
  });

  it("should have a set of props", () => {
    // Act
    const component = renderer.create(<Link />);
    const instance = component.root;
    // Assert
    expect(instance.props.title).toBe("Link title");
    expect(instance.props.label).toBe("Label");
    expect(instance.props.target).toBe("_self");
    expect(instance.props.url).toBe("/page");
  });

  it("should render a link with props", () => {
    // Arrange
    const props = {
      title: "Spotaroom company information",
      label: "Company",
      target: "_self",
      url: "/company"
    };
    // Act
    const component = renderer.create(<Link {...props} />);
    const instance = component.root;
    // Assert
    expect(
      instance.findByProps({ className: "app-header-link" })
    ).not.toBeNull();
    expect(instance.props.title).toBe("Spotaroom company information");
    expect(instance.props.label).toBe("Company");
    expect(instance.props.target).toBe("_self");
    expect(instance.props.url).toBe("/company");
  });

  it("should render and handle clicks", () => {
    // Arrange
    const props = {
      title: "Spotaroom company information",
      label: "Company",
      target: "_self",
      url: "/company"
    };
    const mockClick = jest.fn(() => {
      console.log("clicked");
    });
    // Act
    const component = renderer.create(<Link {...props} click={mockClick} />);
    const instance = component.root;

    instance.findByProps({ className: "app-header-link" }).props.onClick();
    // Assert
    expect(mockClick).toHaveBeenCalled();
  });
});
