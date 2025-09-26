import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import Link from "next/link";
import ClientList from "@/Components/Path/ClientList";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const Contact = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  return (
    <Fragment>
      <Layout
        step={step}
        title="Contact"
        description="Contact Desc"
        navbar={true}
      >
        <section>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5rem]">
              <div className="">
                <WrapAnimateUp step={step} direction="left">
                  <p className="text__24 opacity-40">STAY CONNECTED.</p>
                  <h5 className="py-4 text__40">+1 355 234 342</h5>
                  <h3 className="text__64 mb-[64px]">hi@cobejacob.com</h3>
                  <h5 className="text__32 opacity-40">
                    SAN DIEGO, CALIFORNIA-US
                  </h5>
                </WrapAnimateUp>
              </div>
              <div className="">
                <WrapAnimateUp step={step} direction="right">
                  <div className="grid grid-cols-1 gap-[24px]">
                    <div className="">
                      <p className="text__24 uppercase mb-3">MY NAME IS</p>
                      <input
                        type="text"
                        className="w-full bg-transparent p-0 h-[70px] text__18 uppercase border-b !border-Mneutral_200 placeholder:text-[#00000066] outline-none hover:active:focus:outline-none"
                        placeholder="YOUR NAME"
                      />
                    </div>
                    <div className="">
                      <p className="text__24 uppercase mb-3">
                        HERE IS MY EMAIL
                      </p>
                      <input
                        type="text"
                        className="w-full bg-transparent p-0 h-[70px] text__18 uppercase border-b !border-Mneutral_200 placeholder:text-[#00000066] outline-none hover:active:focus:outline-none"
                        placeholder="YOUR EMAIL"
                      />
                    </div>
                    <div className="">
                      <p className="text__24 uppercase mb-3">I’M LOOKING FOR</p>
                      <input
                        type="text"
                        className="w-full bg-transparent p-0 h-[70px] text__18 uppercase border-b !border-Mneutral_200 placeholder:text-[#00000066] outline-none hover:active:focus:outline-none"
                        placeholder="ENTER PROJECT DETAILS"
                      />
                    </div>
                    <div className="flex justify-end">
                      <Link
                        href={"#!"}
                        className="inline-block px-[24px] py-[14px] rounded-full border !border-Mneutral_900"
                      >
                        <div className="flex items-center gap-2 text__18">
                          SUBMIT{" "}
                          <img
                            src={originalUrl + "carbon_arrow-up-right (1).svg"}
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </WrapAnimateUp>
              </div>
            </div>
          </Container>
        </section>
      </Layout>
    </Fragment>
  );
};

export default Contact;
