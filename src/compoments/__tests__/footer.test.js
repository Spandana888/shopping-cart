import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Footer from "../footer"

describe("footer", () => {
  test("Footer contains copyright" , () =>{
    render(<Footer/>);
    const footer = screen.getByTestId("footer");
    expect(footer).not.toBeEmptyDOMElement();
  })
});