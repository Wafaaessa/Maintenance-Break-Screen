import { render, screen } from "@testing-library/react";
import Maintenance from './Maintenance';
import space from "./../assests/space.png";

jest.mock("./../assests/space.png", () => "/mocked-image.png");

describe("Maintenance component", () => {
  test("renders Maintenance message and image correctly", () => {
    render(<Maintenance />);

    const imageElement = screen.getByAltText(/StorkyApp Under Maintenance/i);
    expect(imageElement).toHaveAttribute("src", "/mocked-image.png");

    const headingElement = screen.getByRole("heading", { name: /StorkyApp Is Currently Under Maintenance/i });
    expect(headingElement).toBeInTheDocument();

    const subMessageElement = screen.getByText(/We should be back shortly/i);
    expect(subMessageElement).toBeInTheDocument();
  });
});
