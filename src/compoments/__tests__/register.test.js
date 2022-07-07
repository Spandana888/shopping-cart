import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import  Register from "../register";
import { BrowserRouter } from "react-router-dom";

describe("SignIn", () =>{
    test("Should render signIn component", () =>{
        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        )
    });
    test("Reister page contains form element", () =>{
        render(
            <BrowserRouter>
               <Register />
            </BrowserRouter>
        );
        const form = screen.getByRole("form");
        expect(form).toBeInTheDocument();
    });
    test("Register page contains form element and it contains requires input fields with type: email and password", () =>{
        render(
            <BrowserRouter>
               <Register />
            </BrowserRouter>
        );
        const firstname = screen.getByPlaceholderText(/firstname/i);
        const lastname = screen.getByPlaceholderText(/lastname/i);
        const email = screen.getByPlaceholderText(/email/i);
        const password = screen.getByPlaceholderText(/passwords/i);
        const confirmpassword = screen.getByPlaceholderText(/confirmpassword/i);

        // firstname
        expect(firstname).toHaveAttribute("type", "text");
        expect(firstname).toHaveAttribute("id","firstname");

        //lastname
        expect(lastname).toHaveAttribute("type","text");
        expect(lastname).toHaveAttribute("id", "lastname");

        //email
        expect(email).toHaveAttribute("type", "email");
        expect(email).toHaveAttribute("id","email");

        //password
        expect(password).toHaveAttribute("type", "password");
        expect(password).toHaveAttribute("id","password");

        //confirmpassword
        expect(confirmpassword).toHaveAttribute("type", "password");
        expect(confirmpassword).toHaveAttribute("id","confirmpassword");
    });
   test("Signin page contains button with type submit", () =>{
        render(
          <BrowserRouter>
              <Register />
          </BrowserRouter>
        );
        const button = screen.getByRole("button", {name: "Signup"});
        expect(button).toHaveAttribute("type", "submit");
    });
})
