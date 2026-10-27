import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

type Props = {
  isVisible: boolean;
};

const BackToTop = ({ isVisible }: Props) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-6 right-6 z-40 rounded-full bg-primary-500 p-3 text-white shadow-lg transition duration-500 hover:bg-secondary-500 hover:text-primary-100"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpIcon className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
