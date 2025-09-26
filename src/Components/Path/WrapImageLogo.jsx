import React, { Fragment, useEffect, useState } from "react";
import useHostname from "../Provider/HostnameProvider";
import { motion } from "framer-motion";

const WrapImageLogo = () => {
  const originalUrl = useHostname() + "/images/";

  const [stepText, setStepText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepText((prevStep) => (prevStep === 5 ? 0 : prevStep + 1)); // Loop dari 0 hingga 5
    }, 1200); // Interval 1 detik

    // Membersihkan interval saat komponen unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <div className="w-[200px] ss:w-[250px] md:w-[350px] h-[190px] ss:h-[220px] md:h-[295px] overflow-hidden relative bg-Mbase_black">
        <motion.img
          src={originalUrl + "Vector.svg"}
          className={
            "absolute z-[1] " +
            (stepText > 0 ? "w-[32px] ss:w-[48px]" : "w-[120px] md:w-[162px]")
          }
          alt=""
          initial={{
            x: "-50%",
            left: "50%",
            y: "-50%",
            top: "50%",
            rotate: "0",
          }}
          animate={{
            x: (() => {
              if (stepText === 0) return "-50%";
              if (stepText === 1) return "5%";
              if (stepText === 2) return "5%";
              if (stepText === 3) return "5%";
              if (stepText === 4) return "5%";
              if (stepText === 5) return "5%";
            })(),
            left: (() => {
              if (stepText === 0) return "50%";
              if (stepText === 1) return "5%";
              if (stepText === 2) return "5%";
              if (stepText === 3) return "5%";
              if (stepText === 4) return "5%";
              if (stepText === 5) return "5%";
            })(),
            y: (() => {
              if (stepText === 0) return "-50%";
              if (stepText === 1) return "-95%";
              if (stepText === 2) return "-95%";
              if (stepText === 3) return "-95%";
              if (stepText === 4) return "-95%";
              if (stepText === 5) return "-95%";
            })(),
            top: (() => {
              if (stepText === 0) return "50%";
              if (stepText === 1) return "95%";
              if (stepText === 2) return "95%";
              if (stepText === 3) return "95%";
              if (stepText === 4) return "95%";
              if (stepText === 5) return "95%";
            })(),
            rotate: (() => {
              if (stepText === 0) return "0";
              if (stepText === 1) return "120deg";
              if (stepText === 2) return "120deg";
              if (stepText === 3) return "120deg";
              if (stepText === 4) return "120deg";
              if (stepText === 5) return "120deg";
            })(),
          }}
          transition={{
            duration: 0.4,
            ease: "linear",
          }}
        />
        {[
          originalUrl + "p1.png",
          originalUrl + "p2.png",
          originalUrl + "p3.png",
          originalUrl + "p4.png",
          originalUrl + "p5.png",
        ].map((obj, idx) => {
          return (
            <>
              <motion.img
                src={obj}
                className={"absolute w-full h-full object-cover left-0  "}
                initial={{
                  top: "100%",
                }}
                animate={{
                  top: (() => {
                    if (stepText === 0) return "100%";
                    if (stepText >= idx + 1) return "0";
                  })(),
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                alt=""
              />
            </>
          );
        })}
      </div>
    </Fragment>
  );
};

export default WrapImageLogo;
