import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const Index = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  return (
    <Fragment>
      <Layout
        step={step}
        title="Detail Article"
        description="Detail Article Desc"
        navbar={true}
      >
        <section>
          <Container>
            <div className="grid-cols-3 grid">
              <div className="col-span-2">
                <WrapAnimateUp step={step}>
                  <Link href={"/"}>
                    <div className="flex items-center gap-2">
                      <img src={originalUrl + "Back.svg"} alt="" />
                      <p className="opacity-40">BACK</p>
                    </div>
                  </Link>
                  <h2 className="text__64 my-2">Milan Portrait</h2>
                  <p className="text__20 opacity-60">2024</p>
                </WrapAnimateUp>
              </div>
            </div>
            <WrapAnimateUp step={step}>
              <img
                src={originalUrl + "Container.png"}
                className="w-full object-cover mt-[2rem] mb-[2rem]"
                alt=""
              />
            </WrapAnimateUp>

            <div className="grid grid-cols-1 gap-[2rem]">
              <div className="grid gap-y-4 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">OVERVIEW</p>
                </div>
                <div className="md:col-span-3">
                  <h5 className="text__32">
                    <span className="ml-[5rem]">Milan</span> Portrait is a
                    lifestyle photography series captured in the heart of Milan
                    — a city where timeless architecture meets modern elegance.
                    The series focuses on portraying the natural charm and
                    individuality of the subject, set against the soft textures
                    of historic streets, urban cafés, and golden afternoon
                    light.
                  </h5>
                </div>
              </div>
              <div className="grid gap-y-4 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">CREATIVE DIRECTION</p>
                </div>
                <div className="md:col-span-3">
                  <h5 className="text__32">
                    The goal was to create a visual narrative that feels
                    effortless yet intentional — blending candid expressions
                    with editorial-style framing. Each shot was guided by the
                    idea of movement, emotion, and presence. Rather than overly
                    posed compositions, I encouraged natural gestures and quiet
                    moments in between.
                  </h5>
                </div>
              </div>
              <div className="grid gap-y-4 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">PROCESS</p>
                </div>
                <div className="md:col-span-3">
                  <h5 className="text__32">
                    I scouted locations around Brera, Navigli, and Piazza del
                    Duomo to find diverse backdrops with authentic Milanese
                    character. The shoot took place over a single day, using
                    mostly natural light with a minimal gear setup (Sony A7III +
                    50mm f/1.4).
                  </h5>
                  <h5 className="text__32 mt-[2rem]">
                    Post-processing focused on preserving the warmth of the
                    environment and the subtle details in skin tone and texture
                    — aiming for an organic, film-like finish.
                  </h5>
                </div>
              </div>
              <div className="grid gap-y-4 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2"></div>
                <div className="md:col-span-3">
                  <div className="grid grid-cols-1">
                    {[
                      {
                        type: "LOCATION",
                        desc: "MILAN, ITALY",
                      },
                      {
                        type: "TYPE",
                        desc: " LIFESTYLE & PORTRAIT PHOTOGRAPHY",
                      },
                      {
                        type: "ROLE",
                        desc: "PHOTOGRAPHER",
                      },
                      {
                        type: "GEAR SETUP",
                        desc: "SONY A7III + 50MM F/1.4",
                      },
                    ].map((obj) => {
                      return (
                        <>
                          <div className="flex items-center justify-between py-[32px] border-b !border-Mneutral_200">
                            <h5 className="text-[14px] ss:text-[18px] md:text-[20px] lg:text-[24px] opacity-40">
                              {obj.type}
                            </h5>
                            <p className="text-[14px] ss:text-[18px] md:text-[20px] lg:text-[24px]">
                              {obj.desc}
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-0">
          <Container>
            <h5 className="text__24 opacity-40 mb-[36px]">RELATED WORK</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <img
                src={originalUrl + "sda.png"}
                className="w-full object-cover"
                alt=""
              />
              <img
                src={originalUrl + "rr1.png"}
                className="w-full object-cover"
                alt=""
              />
              <img
                src={originalUrl + "rr2.png"}
                className="w-full object-cover"
                alt=""
              />
            </div>
          </Container>
        </section>

        <BannerContact />
      </Layout>
    </Fragment>
  );
};

export default Index;
