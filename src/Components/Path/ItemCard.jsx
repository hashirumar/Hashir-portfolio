import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import useHostname from "../Provider/HostnameProvider";
import { Container } from "react-bootstrap";

// Assuming you have a hostname provider or simila
const ItemCard = ({ obj, idx }) => {
  const originalUrl = useHostname() + "/images/";
  const ref = useRef(null);

  // Set up scroll tracking
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform scrollYProgress to a translateY value
//   const translateY = useTransform(scrollY, [0, 1], [0, -100]);
console.log(scrollY)
  return (
    <motion.div
      ref={ref}
      className="border-t border-Mneutral_200 bg-white sticky top-0"
    //   style={{ translateY }}
    >
      <Container>
        <div className="grid grid-cols-5 md:grid-cols-6 py-[80px]">
          <div className="col-span-1 md:col-span-2">
            <h5 className="opacity-20 text__40">0{idx + 1}</h5>
          </div>
          <div className="col-span-4 md:col-span-4">
            <h4 className="text__40 mb-3">{obj.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: obj.desc }} />

            <Link
              href={obj.link}
              className="px-[24px] py-[10px] rounded-full border border-Mneutral_900 inline-block mt-4"
            >
              <div className="flex items-center gap-2">
                <p className="text__18">BOOK NOW</p>
                <img src={originalUrl + "carbon_arrow-up-right.svg"} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default ItemCard;
