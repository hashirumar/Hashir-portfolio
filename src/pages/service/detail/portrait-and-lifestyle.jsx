import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const PortraitAndLifestyle = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  return (
    <Fragment>
      <Layout
        step={step}
        title="Portrait and Lifestyle"
        description="Portrait and Lifestyle Desc"
        navbar={true}
      >
        <section>
          <Container>
            <WrapAnimateUp step={step}>
              <h3 className="text-[40px] md:text-[46px] lg:text-[64px] xl:text-[80px]">
                Portrait & Lifestyle.
              </h3>
            </WrapAnimateUp>
          </Container>
        </section>
        <section className="py-[40px] border-y !border-Mneutral_200">
          <Container>
            <WrapAnimateUp step={step}>
              <h5 className="text__40">
                Natural light, candid moments, and real expressions. I capture
                people as they are —{" "}
                <span className="text-Mneutral_400">
                  whether it’s personal branding, couple portraits, or everyday
                  lifestyle shots.
                </span>
              </h5>
            </WrapAnimateUp>
          </Container>
        </section>
        <section>
          <Container>
            <WrapAnimateUp step={step}>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
                <div className="md:col-span-1">
                  <h5 className="text__20 opacity-40">What’s Included</h5>
                </div>
                <div className="md:col-span-2">
                  <p className="text__20">
                    Each session is carefully planned to reflect your
                    personality and preferences:
                  </p>
                </div>
                <div className="md:col-span-4">
                  <div className="grid grid-cols-1">
                    {[
                      "Pre-shoot call to align on concept, location, and wardrobe.",
                      "Flexible shoot duration (typically 1–2 hours).",
                      "Guidance on posing that feels natural, not stiff.",
                      "20–30 edited images in both high-resolution and web-optimized formats.",
                      "Private online gallery for easy viewing and sharing.",
                    ].map((obj, idx) => {
                      return (
                        <div className="text__20 flex items-center gap-3 py-[24px] border-b !border-Mneutral_200">
                          <h5 className="opacity-20">0{idx + 1}</h5>
                          <h5>{obj}</h5>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </WrapAnimateUp>
          </Container>
        </section>

        <section>
          <Container>
            <img
              src={originalUrl + "sadxasd.png"}
              className="w-full object-cover"
              alt=""
            />

            <div className="py-[40px] grid xs:grid-cols-7">
              <div className="xs:col-span-2"></div>
              <div className="xs:col-span-5">
                <h5 className="text__40">
                  I’ve photographed creatives, couples, and individuals across
                  urban landscapes, cozy homes, and hidden natural backdrops.{" "}
                  <span className="text-Mneutral_400">
                    Each gallery tells a story — quiet, bold, romantic, or
                    playful.
                  </span>
                </h5>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-0">
          <Container>
            <h5 className="text__24 opacity-40 mb-[36px]">
              LIFESTYLE & PORTRAIT GALLERY
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <img
                src={originalUrl + "a3.png"}
                className="w-full object-cover"
                alt=""
              />
              <img
                src={originalUrl + "a1.png"}
                className="w-full object-cover"
                alt=""
              />
              <img
                src={originalUrl + "a2.png"}
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

export default PortraitAndLifestyle;
