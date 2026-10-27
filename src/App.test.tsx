import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import ContactUs from "@/scenes/contactUs";
import { setDesktop } from "@/test/setup";

describe("navigation", () => {
  it("every in-page link points at an existing section", () => {
    setDesktop(true);
    const { container } = render(<App />);
    const links = container.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) => {
      const id = link.getAttribute("href")!.slice(1);
      expect(document.getElementById(id), `#${id}`).not.toBeNull();
    });
  });

  it("closes the mobile menu after choosing a link", async () => {
    setDesktop(false);
    render(<App />);

    await userEvent.click(screen.getByRole("button", { name: "Open menu" }));
    const closeButton = screen.getByRole("button", { name: "Close menu" });
    const menu = closeButton.parentElement!.parentElement!;
    await userEvent.click(within(menu).getByText("Benefits"));

    expect(
      screen.queryByRole("button", { name: "Close menu" })
    ).not.toBeInTheDocument();
  });
});

describe("contact form", () => {
  it("does not submit when fields are invalid", async () => {
    const submit = vi
      .spyOn(HTMLFormElement.prototype, "submit")
      .mockImplementation(() => undefined);
    render(<ContactUs setSelectedPage={() => undefined} />);

    await userEvent.type(screen.getByPlaceholderText("EMAIL"), "not-an-email");
    await userEvent.click(screen.getByRole("button", { name: "SUBMIT" }));

    expect(await screen.findAllByText("This field is required.")).toHaveLength(
      2
    );
    expect(screen.getByText("Invalid email address.")).toBeInTheDocument();
    expect(submit).not.toHaveBeenCalled();
    submit.mockRestore();
  });

  it("submits when all fields are valid", async () => {
    const submit = vi
      .spyOn(HTMLFormElement.prototype, "submit")
      .mockImplementation(() => undefined);
    render(<ContactUs setSelectedPage={() => undefined} />);

    await userEvent.type(screen.getByPlaceholderText("NAME"), "Sara");
    await userEvent.type(
      screen.getByPlaceholderText("EMAIL"),
      "sara@example.com"
    );
    await userEvent.type(screen.getByPlaceholderText("MESSAGE"), "Hello!");
    await userEvent.click(screen.getByRole("button", { name: "SUBMIT" }));

    await vi.waitFor(() => expect(submit).toHaveBeenCalledOnce());
    submit.mockRestore();
  });
});
