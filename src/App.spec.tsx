import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Main App", () => {
  test("renders heading", async () => {
    render(<App />);
    const labelText = screen.getByText(
      /Click on the Vite and React logos to learn more/
    );
    console.log("==>", document.getElementById("test"));
    expect(document.getElementById("test")).toBeInTheDocument();
  });
});
