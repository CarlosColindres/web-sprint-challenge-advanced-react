import React from "react";
import { render ,screen, fireEvent, within } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
});

test("form shows success message on submit with form details", () => {
    
    render(<CheckoutForm/>)

    const inputFirstName =  screen.getByLabelText(/first name:/i)
    const inputLastName =  screen.getByLabelText(/last name:/i)
    const inputAddress =  screen.getByLabelText(/address:/i)
    const inputCity =  screen.getByLabelText(/city:/i)
    const inputState =  screen.getByLabelText(/state:/i)
    const inputZip =  screen.getByLabelText(/zip:/i)

    fireEvent.change(inputFirstName,{target:{ value:"Carlos", name:"firstName"}})
    fireEvent.change(inputLastName,{target:{ value:"Colindres", name:"lastName"}})
    fireEvent.change(inputAddress,{target:{ value:"2929 SW 34th ave", name:"address"}})
    fireEvent.change(inputCity,{target:{ value:"Miami", name:"city"}})
    fireEvent.change(inputState,{target:{ value:"Fl", name:"state"}})
    fireEvent.change(inputZip,{target:{ value:"273456", name:"zip"}})

    expect(inputFirstName).toHaveValue('Carlos')
    expect(inputLastName).toHaveValue('Colindres')
    expect(inputAddress).toHaveValue('2929 SW 34th ave')
    expect(inputCity).toHaveValue('Miami')
    expect(inputState).toHaveValue('Fl')
    expect(inputZip).toHaveValue('273456')

    
    const submit = screen.getByRole('button')

    fireEvent.click(submit)

    const successMessage = screen.getByTestId('successMessage')
    expect(successMessage).toBeInTheDocument()

    within(successMessage).getByText(/carlos colindres/i)
    within(successMessage).getByText(/2929 SW 34th ave/i)
    within(successMessage).getByText(/miami, fl 273456/i)
    
});
