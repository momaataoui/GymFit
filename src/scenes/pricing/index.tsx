import { useState } from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import HText from "@/shared/HText";
import ActionButton from "@/shared/ActionButton";
import { PlanType, SelectedPage } from "@/shared/types";

const YEARLY_DISCOUNT = 0.2;

const plans: Array<PlanType> = [
  {
    name: "Basic",
    monthlyPrice: 199,
    features: [
      "Access to the gym floor",
      "Locker room and showers",
      "1 group class per week",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 349,
    isPopular: true,
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "1 personal training session per month",
      "Free fitness assessment",
    ],
  },
  {
    name: "Premium",
    monthlyPrice: 499,
    features: [
      "Everything in Pro",
      "4 personal training sessions per month",
      "Personalized nutrition plan",
      "Bring a friend for free",
    ],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Pricing = ({ setSelectedPage }: Props) => {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const toggleStyles = (active: boolean) =>
    `rounded-full px-6 py-2 text-sm transition duration-500 ${
      active ? "bg-primary-500 text-white" : "hover:text-primary-500"
    }`;

  return (
    <section id={SelectedPage.Pricing} className="mx-auto w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Pricing)}>
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            CHOOSE YOUR <span className="text-primary-500">PLAN</span>
          </HText>
          <p className="my-5 text-muted">
            Simple, transparent pricing with no hidden fees. Pick the plan that
            fits your goals and switch or cancel anytime.
          </p>
        </motion.div>

        {/* BILLING TOGGLE */}
        <div className="mt-5 flex justify-center">
          <div className="flex gap-1 rounded-full border-2 border-gray-100 p-1">
            <button
              className={toggleStyles(!isYearly)}
              aria-pressed={!isYearly}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={toggleStyles(isYearly)}
              aria-pressed={isYearly}
              onClick={() => setIsYearly(true)}
            >
              Yearly -{YEARLY_DISCOUNT * 100}%
            </button>
          </div>
        </div>

        {/* PLANS */}
        <motion.div
          className="mt-10 items-stretch justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          {plans.map((plan) => {
            const price = isYearly
              ? Math.round(plan.monthlyPrice * (1 - YEARLY_DISCOUNT))
              : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.name}
                variants={childVariant}
                data-testid={`plan-${plan.name}`}
                className={`relative mt-8 flex basis-1/3 flex-col rounded-md border-2 px-8 py-10 md:mt-0 ${
                  plan.isPopular
                    ? "border-primary-500 bg-primary-100 text-white md:-my-4 md:py-14"
                    : "border-gray-100"
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1 text-xs text-white">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="font-montserrat text-2xl">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl">{price} MAD</span>
                  <span className="text-sm text-muted"> / month</span>
                </p>
                <p className="mt-1 h-5 text-xs text-muted">
                  {isYearly && `Billed yearly: ${price * 12} MAD`}
                </p>

                <ul className="my-8 flex-1 space-y-3 text-base">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-primary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center text-primary-100">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Get {plan.name}
                  </ActionButton>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Pricing;
