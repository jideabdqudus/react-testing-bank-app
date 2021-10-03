import { render, screen } from "@testing-library/react";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";
import userEvent from "@testing-library/user-event";

// Arrange
// Act
// Assert

// Unit Tests
// eslint-disable-next-line no-lone-blocks
{
  /*
test("on initial render button is disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

test("If an amount and note is entered, the pay button becomes enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "Dinner");
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
*/
}

//Integration Test
test("If an amount and note is entered, the pay button becomes enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "Dinner");
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
