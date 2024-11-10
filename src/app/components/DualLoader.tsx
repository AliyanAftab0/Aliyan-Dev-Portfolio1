import { motion } from 'framer-motion';
import Image from 'next/image';

const DualLoader = () => {
  return (
    <motion.span
      className="my-40 mx-16 dual-spin-border max-xl:hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <a href="#">
        <Image
          className="rounded-full"
          src={"/logo.png"}
          width={210}
          height={210}
          alt="Aliyan Dev"
        />
      </a>
    </motion.span>
  );
};

export default DualLoader;
