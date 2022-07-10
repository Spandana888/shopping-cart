import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../heading";

describe("Header" , () => {
    test("Header contains Saabka Bazar Home logo", async () => {
        render(
            <BrowserRouter>
               <Header />        
            </BrowserRouter>
        );
        expect (await screen.findByAltText(/Sabka Bazaar/i)).toHaveAttribute(
            "src",
            "logo.png"
        );
    });
    test("Header contains Saabka Bazar Home logo", async () => {
        render(
            <BrowserRouter>
               <Header />        
            </BrowserRouter>
        );
        expect (await screen.findByAltText(/Sabka Bazaar/i)).toHaveAttribute(
            "src",
            "logo.png"
        );
    });
    test("Header contain navigation link -  Home, Product, SignIn, Register", async () => {
        render(
            <BrowserRouter>
               <Header />
            </BrowserRouter>
        );
       const homeNavigation  =  screen.getAllByRole("link", { name: /home/i });
       const productNavigation = screen.getAllByRole("link", { name: /product/i });
       const signInNavigation = screen.getAllByRole("link", { name: /signIn/i });
       const registerNavigation = screen.getAllByRole("link", { name : /register/i});

       //checking home link have href and name
       homeNavigation.forEach((item) => {
         expect(item).toHaveAttribute("href", "/")
       });

       //checking product link have href and name
       productNavigation.forEach((link) => {
         expect(link).toHaveAttribute("href", "/products")
       });

       //checking signIn link have href and name
       signInNavigation.forEach((link) =>{
          expect(link).toHaveAttribute("href","/signIn")
       });

       //checking register link have href and name
       registerNavigation.forEach((link)=> {
         expect(link).toHaveAttribute("href", "/register");
       });
    });
    test("Header contain cart button", () =>{
       render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
       );
       const cartButton = screen.getByTestId("cart-button");
       expect(cartButton).toBeInTheDocument();
    });
});