import React, { Fragment, useState } from "react";
import useHostname from "../Provider/HostnameProvider";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import BackdropFixed from "../Path/BackdropFixed";

const Navbar = ({ step = 0 }) => {
  const originalUrl = useHostname();

  const router = useRouter();

  const isActive = (path) => {
    if (path === "/") {
      return router.pathname === "/";
    }
    return router.pathname.startsWith(path) && router.pathname !== "/";
  };

  const [ToogleMenu, setToogleMenu] = useState(false);

  const [ToogleResume, setToogleResume] = useState(false);

  return (
    <Fragment>
      <BackdropFixed
        status={ToogleResume}
        onAction={() => setToogleResume(!ToogleResume)}
      />
      <div
        className={
          "fixed z-[91] w-[90%] ss:w-[390px] bg-white p-[24px] left-1/2 -translate-x-1/2 top-1/2  transition-all duration-300 " +
          (ToogleResume
            ? "-translate-y-1/2"
            : "translate-y-[80%] opacity-0 pointer-events-none")
        }
      >
        <div className="grid grid-cols-1 gap-[24px]">
          <img
            src={originalUrl + "/images/Frame 14.png"}
            className="w-full object-cover"
            alt=""
          />
          <div className="text-center">
            <h5 className="text__24 mb-2">Get a free resume template!</h5>
            <p className="text__14 text-[#525252]">
              Purchase this product today and receive a professionally designed
              resume, totally free. Perfect to help you stand out in your next
              application.
            </p>
          </div>
          <div className="text-center">
            <a
              href={"#!"}
              target="_blank"
              className="px-[24px] py-[10px] rounded-full border !border-Mneutral_900 inline-block"
            >
              <div className="flex items-center gap-2">
                <p className="text__18">Buy now</p>
                <img
                  src={originalUrl + "/images/carbon_arrow-up-right.svg"}
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="fixed w-full py-4 bg-white z-[80] border-b !border-Mgrayscale_200 lg:!border-none">
        <Container className="overflow-hidden">
          <div
            className={
              "flex items-center justify-between relative text__16 uppercase transition-all duration-700 " +
              (step > 3 ? "" : "-translate-y-[2rem]")
            }
          >
            <Link href={"/"} className="text-Mgrayscale_900">
               POrtfolio
            </Link>

            <div className="hidden md:flex items-center justify-center gap-4 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <Link href={"/projects"}>PROJECTS</Link>
              <Link href={"/article"}>ARTICLE</Link>
              <Link href={"/about"}>ABOUT</Link>
              <div
                onClick={() => setToogleResume(!ToogleResume)}
                className="cursor-pointer"
              >
                RESUME{" "}
              </div>
            </div>

            <Link href={"/contact"} className="md:block hidden">
              CONTACT
            </Link>
            <div
              onClick={() => setToogleMenu(!ToogleMenu)}
              className="font-medium text__14 md:hidden cursor-pointer"
            >
              {ToogleMenu ? (
                <>
                  <img src={originalUrl + "/images/Close.svg"} alt="" />
                </>
              ) : (
                "MENU"
              )}
            </div>
          </div>
        </Container>
      </div>
      <div
        className={
          "fixed z-[75] bg-white w-full left-0 pt-[70px] transition-all duration-300 md:hidden " +
          (ToogleMenu ? "top-0" : "-top-[50rem]")
        }
      >
        <Container className="py-4">
          <div className="grid grid-cols-1 gap-y-[20px]">
            <Link href={"/projects"} className="text-[32px]">
              PROJECTS
            </Link>
            <Link href={"/article"} className="text-[32px]">
              ARTICLE
            </Link>
            <Link href={"/about"} className="text-[32px]">
              ABOUT
            </Link>
            <div
              onClick={() => setToogleResume(!ToogleResume)}
              className="text-[32px] cursor-pointer"
            >
              RESUME{" "}
            </div>
            <Link href={"/contact"} className="text-[32px]">
              CONTACT
            </Link>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Navbar;
