import Link from "next/link";
import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "../Provider/HostnameProvider";

const ClientList = () => {
  const originalUrl = useHostname() + "/images/";
  return (
    <Fragment>
      {" "}
      <section>
        <Container>
          <h5 className="text__24 opacity-40 mb-[24px] md:mb-[56px]">CLIENTS</h5>
        </Container>
        <div className="grid grid-cols-1">
          {[
            "Gucci.",
            "Vogue Italia.",
            "Ristorante Cracco.",
            "Lake Como Wedding.",
          ].map((obj, idx) => {
            return (
              <>
                <div className="py-[32px] w-full border-b !border-Mneutral_200 text__48">
                  <Container>
                    <div className="w-full md:pl-[8rem]">
                      <span className="opacity-20">0{idx + 1}</span> {" " + obj}
                    </div>
                  </Container>
                </div>
              </>
            );
          })}
        </div>

        <Container>
          <div className="flex xs:justify-end flex-wrap items-center mt-[40px] md:mt-[80px] gap-4">
            <Link
              href={"/projects"}
              className="px-[24px] py-[10px] rounded-full border !border-Mneutral_900 inline-block order-2 xs:!order-1"
            >
              <div className="flex items-center gap-2">
                <p className="text__18">OUR WORK</p>
                <img src={originalUrl + "carbon_arrow-up-right.svg"} alt="" />
              </div>
            </Link>
            <h5 className="text__32 order-1 xs:!order-2">
              Tailored Photography for <br /> Every Occasion.
            </h5>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default ClientList;
