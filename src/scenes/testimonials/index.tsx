import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import HText from "@/shared/HText";
import { TestimonialType } from "@/shared/types";

const AUTO_ADVANCE_MS = 6000;

const testimonials: Array<TestimonialType> = [
  {
    name: "Yasmine B.",
    role: "Member for 2 years",
    rating: 5,
    quote:
      "The coaches here changed the way I train. I lost 12 kg and, more importantly, I finally enjoy working out.",
  },
  {
    name: "Karim E.",
    role: "Boxing class regular",
    rating: 5,
    quote:
      "The boxing classes are intense and so much fun. The atmosphere keeps me coming back four times a week.",
  },
  {
    name: "Salma M.",
    role: "Yoga & Pilates member",
    rating: 4,
    quote:
      "Clean, modern and welcoming. The yoga sessions are the perfect balance to my busy work week.",
  },
  {
    name: "Omar T.",
    role: "Premium member",
    rating: 5,
    quote:
      "My nutrition plan and personal sessions got me ready for my first half marathon. Worth every dirham.",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

const Testimonials = () => {
  const [index, setIndex] = useState<number>(0);
  const count = testimonials.length;
  const goTo = (next: number) => setIndex((next + count) % count);

  // Restarting the timer whenever the index changes means manual navigation
  // always gets a full interval before the next auto-advance.
  useEffect(() => {
    const timer = setTimeout(
      () => setIndex((i) => (i + 1) % count),
      AUTO_ADVANCE_MS
    );
    return () => clearTimeout(timer);
  }, [index, count]);

  const current = testimonials[index];
  const arrowStyles =
    "rounded-full border-2 border-primary-300 p-3 text-white transition duration-500 hover:border-primary-500 hover:text-primary-500";

  return (
    <section id="testimonials" className="w-full bg-primary-100 py-24">
      <div className="mx-auto w-5/6">
        <motion.div
          className="text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <HText>
            WHAT OUR <span className="text-primary-500">MEMBERS</span> SAY
          </HText>
        </motion.div>

        <div className="mt-12 flex items-center justify-center gap-4 md:gap-10">
          <button
            className={arrowStyles}
            aria-label="Previous testimonial"
            onClick={() => goTo(index - 1)}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <div className="min-h-[300px] max-w-2xl flex-1 xs:min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={current.name}
                className="text-center text-white"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="flex justify-center gap-1"
                  aria-label={`${current.rating} out of 5 stars`}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className={`h-5 w-5 ${
                        star <= current.rating
                          ? "text-secondary-500"
                          : "text-primary-300"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="mt-6 text-lg font-normal leading-relaxed md:text-xl">
                  "{current.quote}"
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-base">
                    {initials(current.name)}
                  </span>
                  <span className="text-left">
                    <span className="block">{current.name}</span>
                    <span className="block text-sm text-muted">
                      {current.role}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <button
            className={arrowStyles}
            aria-label="Next testimonial"
            onClick={() => goTo(index + 1)}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>

        {/* DOTS */}
        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.name}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              className={`h-3 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-primary-500" : "w-3 bg-primary-300"
              }`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
