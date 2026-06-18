import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders search box", () => {
  render(<App />);
  const search = screen.getByPlaceholderText(/search amazon/i);
  expect(search).toBeInTheDocument();
});