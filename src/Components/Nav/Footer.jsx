import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useHostname from "../Provider/HostnameProvider";
import Link from "next/link";

const Footer = () => {
  const originalUrl = useHostname();
  return (
    <Fragment>
      <section className="pb-6">
        <Container>
          <div className="text-center mb-[56px]">
            <p className="text__18 opacity-60 mb-2">STAY CONNECTED.</p>
            <h5 className="text__32">hi@cobejacob.com</h5>
          </div>

          <div className="flex items-center justify-between text__16 relative">
            <p className="md:block hidden ">©️2025</p>
            <div className="flex items-center gap-3 ss:gap-4 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <Link href={"/projects"}>PROJECTS</Link>
              <Link href={"/article"}>ARTICLE</Link>
              <Link href={"/about"}>ABOUT</Link>
              <Link href={"#!"}>RESUME </Link>
              <Link href={"/contact"} className="sm:hidden">
                CONTACT
              </Link>
            </div>
            <Link href={"/contact"} className="sm:inline-block hidden">
              CONTACT
            </Link>
          </div>

          <p className="text-center mt-4 opacity-40 md:hidden ">©️2025</p>
        </Container>
      </section>
    </Fragment>
  );
};

export default Footer;
