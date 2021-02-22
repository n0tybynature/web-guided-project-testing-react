import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MissionForm from "./MissionForm";

test("shows loading message when button is clicked", () => {
  render(<MissionForm />);

  // test that loading message is NOT in the UI
  expect(screen.queryByText(/we are fetching data/i)).toBeNull();

  // query for the get data button

  // click the button - userEvent.click (DID NOT LIKE IT)

  // test that the loading message IS in the UI
});
