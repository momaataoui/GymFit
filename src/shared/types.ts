// Values double as section ids and nav anchors, so they must match
// the lowercased nav labels produced in scenes/navbar/Link.tsx.
export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  Pricing = "pricing",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

export interface PlanType {
  name: string;
  monthlyPrice: number;
  features: Array<string>;
  isPopular?: boolean;
}

export interface TestimonialType {
  name: string;
  role: string;
  rating: number;
  quote: string;
}
