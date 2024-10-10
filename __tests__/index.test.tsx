/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "@/pages/home/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
  
  it("should show a hidden message after button click", () => {
    const { getByText, queryByText,  } = render(<Home />);
    const button = getByText("Show message");
    
    expect(queryByText("This is a hidden message!")).not.toBeInTheDocument();
    
    fireEvent.click(button);
    
    expect(screen.getByText("This is a hidden message!")).toBeInTheDocument();
  })
});
