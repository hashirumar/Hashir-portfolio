import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SplitType from "split-type";

const TextAnimation = ({ isVisible, children }) => {
  const textRef = useRef(null);
  const splitRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const textContent = React.Children.toArray(children).join("");

  useEffect(() => {
    if (!isClient || typeof window === "undefined" || !textRef.current) return;

    // Remove previous SplitType instance
    if (splitRef.current) {
      splitRef.current.revert();
      splitRef.current = null;
    }

    // Initialize SplitType to split text into lines
    if (isVisible && SplitType) {
      splitRef.current = new SplitType(textRef.current, {
        types: "lines", // Split by lines
      });
    }

    return () => {
      if (splitRef.current) {
        splitRef.current.revert();
        splitRef.current = null;
      }
    };
  }, [textContent, isVisible, isClient]);

  if (!isClient) return null;

  return (
    <div className="overflow-hidden">
      <motion.div
        key={`animation-${isVisible}-${textContent}`}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3, // Stagger line animation
              ease: "easeOut",
            },
          },
          hidden: {},
        }}
      >
        <motion.span
          ref={textRef}
          className="inline-block"
          variants={{
            hidden: { y: 50, opacity: 0 }, // Lines start from below and invisible
            visible: { y: 0, opacity: 1 },  // Lines move up and become visible
          }}
          transition={{ duration: 0.9 }}
        >
          {children}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default TextAnimation;
