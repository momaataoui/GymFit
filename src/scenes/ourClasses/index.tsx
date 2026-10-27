import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.webp";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";

import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength and muscle with coached free-weight and machine sessions for every level.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Improve flexibility, balance and focus in calm, guided flows.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description: "Targeted core work to strengthen your abs, back and posture.",
    image: image3,
  },
  {
    name: "Muscle Stretching",
    description:
      "Recover faster and move better with mobility and stretching sessions.",
    image: image4,
  },
  {
    name: "Boxing Classes",
    description:
      "High-energy boxing drills for conditioning, coordination and power.",
    image: image5,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={SelectedPage.OurClasses}
      className="w-full bg-primary-100 py-40"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5 text-muted">
              Explore our extensive schedule featuring hundreds of weekly
              classes designed for every interest and fitness level. From
              high-energy cardio and strength training to mindful yoga and
              pilates, you'll find the perfect way to move, challenge yourself,
              and stay motivated.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-max whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
