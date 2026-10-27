import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getBmi } from "@/scenes/bmi/bmi";
import Bmi from "@/scenes/bmi";
import Pricing from "@/scenes/pricing";
import Testimonials from "@/scenes/testimonials";

const noop = () => undefined;

describe("getBmi", () => {
  it("computes the BMI and its category", () => {
    expect(getBmi(175, 70)).toMatchObject({
      value: 22.9,
      category: "Healthy weight",
    });
    expect(getBmi(170, 50)?.category).toBe("Underweight");
    expect(getBmi(180, 90)?.category).toBe("Overweight");
    expect(getBmi(165, 100)?.category).toBe("Obese");
  });

  it("returns null for missing or unrealistic values", () => {
    expect(getBmi(0, 70)).toBeNull();
    expect(getBmi(175, 0)).toBeNull();
    expect(getBmi(20, 70)).toBeNull();
  });
});

describe("BMI calculator", () => {
  it("shows the result as the user types", async () => {
    render(<Bmi setSelectedPage={noop} />);

    await userEvent.type(screen.getByLabelText("HEIGHT (CM)"), "175");
    await userEvent.type(screen.getByLabelText("WEIGHT (KG)"), "70");

    expect(screen.getByText("22.9", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("Healthy weight")).toBeInTheDocument();
  });
});

describe("pricing", () => {
  it("applies the yearly discount", async () => {
    render(<Pricing setSelectedPage={noop} />);
    const pro = screen.getByTestId("plan-Pro");
    expect(within(pro).getByText("349 MAD")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /yearly/i }));

    expect(within(pro).getByText("279 MAD")).toBeInTheDocument();
    expect(
      within(pro).getByText("Billed yearly: 3348 MAD")
    ).toBeInTheDocument();
  });
});

describe("testimonials", () => {
  it("navigates with the arrows and wraps around", async () => {
    render(<Testimonials />);
    expect(screen.getByText("Yasmine B.")).toBeInTheDocument();

    await userEvent.click(
      screen.getByRole("button", { name: "Previous testimonial" })
    );
    expect(await screen.findByText("Omar T.")).toBeInTheDocument();

    await userEvent.click(
      screen.getByRole("button", { name: "Next testimonial" })
    );
    expect(await screen.findByText("Yasmine B.")).toBeInTheDocument();
  });
});
