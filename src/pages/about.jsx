import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import Link from "next/link";
import ClientList from "@/Components/Path/ClientList";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const About = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  return (
    <Fragment>
      <Layout step={step} title="About" description="About Desc" navbar={true}>
        <section>
          <Container>
            <WrapAnimateUp step={step}>
              <p className="text__20 opacity-40">ABOUT ME</p>
              <h2 className="text-[40px] md:text-[46px] lg:text-[64px] xl:text-[80px] my-2">
                Kobe Jacob
              </h2>
              <p className="text__20 opacity-60">Senior Photographer Expert</p>
            </WrapAnimateUp>
          </Container>
        </section>

        <section className="pt-0">
          <Container>
            <div className="grid-cols-3 grid">
              <div className="lg:col-span-1"></div>
              <div className="col-span-3 lg:col-span-2">
                <WrapAnimateUp step={step}>
                  <img
                    src={originalUrl + "sas.png"}
                    className="w-full object-cover mb-[32px]"
                    alt=""
                  />
                </WrapAnimateUp>
                <h3 className="text__40 mb-[32px]">
                  <span className="ml-[5rem]">Hey!</span> I’m Jacob, a
                  passionate photographer who loves turning simple moments into
                  extraordinary visuals. Whether it’s a portrait, event, or
                  lifestyle shot, I focus on capturing the essence of every
                  scene.{" "}
                </h3>

                <div className="grid grid-cols-1">
                  {[
                    {
                      time: "12+",
                      desc: "YEARS OF EXPERIENCE",
                    },
                    {
                      time: "300+",
                      desc: "PROJECTS",
                    },
                    {
                      time: "96%",
                      desc: "SATISFIED CLIENTS",
                    },
                  ].map((obj) => {
                    return (
                      <>
                        <div className="flex items-center justify-between py-[32px] border-b !border-Mneutral_200">
                          <h5 className="text__64">{obj.time}</h5>
                          <p className="text__24 opacity-40">{obj.desc}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <ClientList />

        <BannerContact />
      </Layout>
    </Fragment>
  );
};

export default About;
