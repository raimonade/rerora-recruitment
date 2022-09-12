import { ReactNode } from 'react';
import { motion } from 'framer-motion';
const AppearIn = ({ children, delay,y }: { y?:number,children: Element | ReactNode; delay?: number }) => {
  return (
    <div class="relative overflow-hidden py-2 my-[-0.5rem]">
      <motion.div
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            type: 'tween',
            ease: [0.45, 0, 0.45, 1],
            duration: 0.7,
            delay: delay,
          },
        }}
        initial={{
          y:y ? y : '100%',
          opacity: 0,
        }}
      >
        <div>{children}</div>
      </motion.div>
    </div>
  );
};

export default AppearIn;
