import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import SignIn from "../signIn";
import { BrowserRouter } from "react-router-dom";

describe("SignIn", () =>{
    test("Should render signIn component", () =>{
        render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        )
    });
    test("Signin page contains form element", () =>{
        render(
          <BrowserRouter>
              <SignIn />
          </BrowserRouter>
        );
        const form = screen.getByRole("form");
        expect(form).toBeInTheDocument();
    });
    test("Signin page contains form element and it contains requires input fields  with type: email, and password", () =>{
        render(
          <BrowserRouter>
              <SignIn />
          </BrowserRouter>
        );
        const email = screen.getByPlaceholderText(/email/i);
        const password = screen.getByPlaceholderText(/password/i)
        // email
        expect(email).toHaveAttribute("type", "email");
        expect(email).toHaveAttribute("id","email");

        //password
        expect(password).toHaveAttribute("type", "password");
        expect(password).toHaveAttribute("id","password")
    });
    test("Signin page contains button with type submit", () =>{
      render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
      );
      const button = screen.getByRole("button", {name: "Login"});
      expect(button).toHaveAttribute("type", "submit");
  });
})
