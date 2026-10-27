import { useState } from "react";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import { getBmi } from "./bmi";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Bmi = ({ setSelectedPage }: Props) => {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const result = getBmi(Number(height), Number(weight));

  const inputStyles = `mt-2 w-full rounded-lg bg-primary-300
  px-5 py-3 text-white placeholder-white/60`;

  return (
    <section id="bmi" className="mx-auto w-5/6 py-20">
      <div className="items-center justify-between gap-16 md:flex">
        {/* HEADER */}
        <motion.div
          className="basis-1/2"
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
            CALCULATE YOUR <span className="text-primary-500">BMI</span>
          </HText>
          <p className="my-5 text-muted">
            Your Body Mass Index is a quick way to see where you stand. Enter
            your height and weight to get your BMI and the class we recommend to
            start your journey.
          </p>
        </motion.div>

        {/* CALCULATOR */}
        <motion.div
          className="mt-10 basis-1/2 rounded-md bg-primary-100 p-8 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="gap-6 xs:flex">
            <label className="block flex-1 text-sm text-white">
              HEIGHT (CM)
              <input
                className={inputStyles}
                type="number"
                inputMode="decimal"
                min={100}
                max={250}
                placeholder="175"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </label>
            <label className="mt-5 block flex-1 text-sm text-white xs:mt-0">
              WEIGHT (KG)
              <input
                className={inputStyles}
                type="number"
                inputMode="decimal"
                min={30}
                max={300}
                placeholder="70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>
          </div>

          <div className="mt-8 min-h-[140px] text-white" aria-live="polite">
            {result ? (
              <>
                <p className="text-sm text-muted">YOUR BMI</p>
                <p className="text-5xl">
                  {result.value}{" "}
                  <span className={`text-xl ${result.colorClass}`}>
                    {result.category}
                  </span>
                </p>
                <p className="mt-4 text-base text-gray-50">
                  {result.recommendation}
                </p>
              </>
            ) : (
              <p className="text-base text-muted">
                Enter a height between 100 and 250 cm and a weight between 30
                and 300 kg to see your result.
              </p>
            )}
          </div>

          <div className="mt-4 text-primary-100">
            <ActionButton setSelectedPage={setSelectedPage}>
              Talk to a coach
            </ActionButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bmi;
