import Link from "next/link";
import React, { Fragment, useState } from "react";
import useHostname from "../Provider/HostnameProvider";
import { motion } from "framer-motion";

const WrapWork = () => {
  const originalUrl = useHostname() + "/images/";
  const [onHoverText, setonHoverText] = useState(0);

  return (
    <Fragment>  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            img: originalUrl + "w4.png",
            name: "Milan Portraits.",
            link: "/work/detail/milan-portraits",
          },
          {
            img: originalUrl + "w1.png",
            name: "Weeding Dream.",
            link: "/work/detail/weeding-dream",
          },
          {
            img: originalUrl + "w2.png",
            name: "Commercial Product.",
            link: "/work/detail/commercial-product",
          },
          {
            img: originalUrl + "w3.png",
            name: "Fashion Photography.",
            link: "/work/detail/fashion-photography",
          },
        ].map((obj, idx) => {
          return (
            <>
              <Link
                href={obj.link}
                className="w-full inline-block"
                onMouseEnter={() => setonHoverText(idx + 1)} // Set state menjadi true saat hover
                onMouseLeave={() => setonHoverText(0)}
              >
                <div className="w-full rounded-lg h-[340px] md:h-[400px] lg:h-[550px] xl:h-[638px] relative overflow-hidden mb-3">
                  <motion.img
                    initial={{ scale: 1 }}
                    animate={{
                      scale: onHoverText == idx + 1 ? "1.2" : "1",
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    src={obj.img}
                    className="object-cover absolute w-full h-full left-0 top-0 transition-all duration-500 "
                    alt=""
                  />
                </div>
                <div className="relative overflow-hidden inline-block w-full">
                  <h5 className="text__18">
                    {/* <span className="opacity-20">0{idx + 1}</span> */}
                     {obj.name}
                  </h5>
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{
                      y: onHoverText == idx + 1 ? "-50%" : "100%",
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="absolute right-0 top-1/2"
                  >
                    <img src={   + "ArrowUpRight.svg"} alt="" />
                  </motion.div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </Fragment>
  );
};

export default WrapWork;
