import React, { Fragment, useEffect, useState } from "react";
import useHostname from "../Provider/HostnameProvider";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "react-bootstrap";

const WrapServices = () => {
  const originalUrl = useHostname() + "/images/";

  const [onHoverText, setonHoverText] = useState(0);
  return (
    <Fragment>
      <div className="grid grid-cols-1">
        {[
          {
            title: "Portrait & Lifestyle.",
            link: "/service/detail/portrait-and-lifestyle",
            image: originalUrl + "im3.png",
            imageStyle: "right-0",
          },
          {
            title: "Wedding & Event Coverage.",
            link: "/service/detail/wedding-and-event-coverage",
            image: originalUrl + "im2.png",
            imageStyle: "right-[25%]",
          },
          {
            title: "Commercial Product.",
            link: "/service/detail/commercial-product",
            image: originalUrl + "im1.png",
            imageStyle: "right-[46%]",
          },
          {
            title: "Fashion.",
            link: "/service/detail/fashion",
            image: originalUrl + "im4.png",
            imageStyle: "right-[63%]",
          },
        ].map((obj, idx) => {
          return (
            <div className="border-b !border-Mneutral_300">
              <Container>
                <Link
                  href={obj.link}
                  onMouseEnter={() => setonHoverText(idx + 1)} // Set state menjadi true saat hover
                  onMouseLeave={() => setonHoverText(0)}
                  className="overflow-hidden w-full py-4 relative flex items-center justify-start"
                >
                  <motion.img
                    src={obj.image}
                    className={"absolute z-[1] top-1/2 w-[150px] md:w-auto " + obj.imageStyle}
                    alt=""
                    initial={{ y: "100%", rotate: "-22deg" }}
                    animate={{
                      y: onHoverText == idx + 1 ? "-50%" : "100%",
                      rotate: onHoverText == idx + 1 ? "0deg" : "-22deg",
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                  />
                  <motion.div
                    className="absolute right-0 top-1/2 hidden xl:inline-block"
                    initial={{ y: "100%" }}
                    animate={{ y: onHoverText == idx + 1 ? "-50%" : "100%" }}
                    transition={{
                      duration: 0.4,
                    }}
                  >
                    <img src={originalUrl + "right.svg"} alt="" />
                  </motion.div>
                  <motion.h3
                    className="text-right text-[24px] xx:text-[28px] xs:text-[36px] md:text-[56px] lg:text-[72px] xl:text-[90px] flex-shrink-0 transition-all duration-500"
                    initial={{ opacity: "1" }}
                    animate={{ opacity: onHoverText == idx + 1 ? "0.2" : "1" }}
                  >
                    {obj.title}
                  </motion.h3>
                </Link>
              </Container>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default WrapServices;
