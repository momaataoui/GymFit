export type BmiResult = {
  value: number;
  category: string;
  colorClass: string;
  recommendation: string;
};

// Returns null until both values are realistic enough to compute a BMI.
export const getBmi = (
  heightCm: number,
  weightKg: number
): BmiResult | null => {
  if (
    !(heightCm >= 100 && heightCm <= 250 && weightKg >= 30 && weightKg <= 300)
  )
    return null;

  const value = Math.round((weightKg / (heightCm / 100) ** 2) * 10) / 10;

  if (value < 18.5)
    return {
      value,
      category: "Underweight",
      colorClass: "text-secondary-500",
      recommendation:
        "Weight Training Classes will help you build muscle and healthy mass.",
    };
  if (value < 25)
    return {
      value,
      category: "Healthy weight",
      colorClass: "text-green-500",
      recommendation:
        "Keep it up! Yoga and Ab Core Classes will keep you strong and flexible.",
    };
  if (value < 30)
    return {
      value,
      category: "Overweight",
      colorClass: "text-orange-500",
      recommendation:
        "Boxing Classes are a fun, high-energy way to burn calories fast.",
    };
  return {
    value,
    category: "Obese",
    colorClass: "text-primary-500",
    recommendation:
      "Start gently with Muscle Stretching and a personal trainer to build a safe plan.",
  };
};
