import React, { Fragment } from "react";
import { motion } from "framer-motion";
import useHostname from "../Provider/HostnameProvider";

const LoadingHome = ({ step = 0 }) => {
  const originalUrl = useHostname() + "/images/";
  return (
    <Fragment>
      <motion.div initial={{
            opacity: "1",
            pointerEvents:"auto"
          }}
          animate={{
            opacity: (() => {
              if (step === 0) return "1";
              if (step === 1) return "1";
              if (step === 2) return "1";
              if (step === 3) return "0";
              if (step === 4) return "0";
            })(),
            pointerEvents: (() => {
              if (step === 0) return "auto";
              if (step === 1) return "auto";
              if (step === 2) return "auto";
              if (step === 3) return "auto";
              if (step === 4) return "none";
            })(),
          }} className="fixed w-full h-full left-0 top-0 z-[99] bg-Mneutral_900 overflow-hidden transition-all duration-500">
        <motion.img
          initial={{
            y: "100vh",
            x: "-50%",
            scale: 1,
            rotate: "-120deg",
          }}
          animate={{
            y: (() => {
              if (step === 0) return "100vh";
              if (step === 1) return "-50%";
              if (step === 2) return "-50%";
              if (step === 3) return "-50%";
              if (step === 4) return "-50%";
            })(),
            x: "-50%",
            scale: (() => {
              if (step === 0) return 1;
              if (step === 1) return 1;
              if (step === 2) return 50;
              if (step === 3) return 50;
              if (step === 4) return 50;
            })(),
            rotate: (() => {
              if (step === 0) return "-120deg";
              if (step === 1) return "0deg";
              if (step === 2) return "-120deg";
              if (step === 3) return "-120deg";
              if (step === 4) return "-120deg";
            })(),
          }}
          transition={{
            duration: 0.9,
            ease:"easeInOut"
          }}
          src={originalUrl + "sdasd.svg"}
          className="absolute left-1/2 top-1/2"
          alt=""
        />
        {/* <img
          src={originalUrl + "sdasd.svg"}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[25]"
          alt=""
        /> */}
      </motion.div>
    </Fragment>
  );
};

export default LoadingHome;
