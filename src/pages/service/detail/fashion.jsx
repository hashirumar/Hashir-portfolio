import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const Fashion = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  return (
    <Fragment>
      <Layout
        step={step}
        title="Fashion"
        description="Fashion Desc"
        navbar={true}
      >
        <section>
          <Container>
            <WrapAnimateUp step={step}>
              <h3 className="text-[40px] md:text-[46px] lg:text-[64px] xl:text-[80px]">
                Fashion.
              </h3>
            </WrapAnimateUp>
          </Container>
        </section>
        <section className="py-[40px] border-y !border-Mneutral_200">
          <Container>
            <WrapAnimateUp step={step}>
              <h5 className="text__40">
                Fashion is more than fabric — it’s attitude, concept, and visual
                culture. My{"  "}
                <span className="text-Mneutral_400">
                  fashion photography blends mood, movement, and emotion to
                  highlight your brand’s personality.
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
                    A seamless process from creative ideation to final delivery:
                  </p>
                </div>
                <div className="md:col-span-4">
                  <h5 className="text__32 mb-4">
                    From lookbooks to campaigns, I work collaboratively with
                    stylists and designers to bring your creative vision to
                    life.
                  </h5>
                  <div className="grid grid-cols-1">
                    {[
                      "Concept development and moodboarding.",
                      "Editorial, campaign, or catalogue-style shoot.",
                      "Studio or on-location setup with lighting included.",
                      "Collaboration with stylists, MUAs, and models (available).",
                      "10–30 professionally retouched images.",
                      "Rights for print, web, and social campaigns.",
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
              src={originalUrl + "sds.png"}
              className="w-full object-cover"
              alt=""
            />

            <div className="py-[40px] grid xs:grid-cols-7">
              <div className="xs:col-span-2"></div>
              <div className="xs:col-span-5">
                <h5 className="text__40 mb-[2.5rem]">
                  I’ve helped emerging designers and established labels craft
                  bold visual stories.
                </h5>
                <h5 className="text__40">
                  Whether it’s a minimalist{" "}
                  <span className="text-Mneutral_400">
                    streetwear line or an avant-garde couture piece, I tailor
                    each frame to your aesthetic.
                  </span>
                </h5>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-0">
          <Container>
            <h5 className="text__24 opacity-40 mb-[36px]">RECENT PROJECTS</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <img
                src={originalUrl + "ss1.png"}
                className="w-full object-cover"
                alt=""
              />
              <img
                src={originalUrl + "ss3.png"}
                className="w-full object-cover"
                alt=""
              />
              <img
                src={originalUrl + "ss2.png"}
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

export default Fashion;
