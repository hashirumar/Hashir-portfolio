import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const WeddingEventCoverage = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  return (
    <Fragment>
      <Layout
        step={step}
        title="Wedding & Event Coverage"
        description="Wedding & Event Coverage Desc"
        navbar={true}
      >
        <section>
          <Container>
            <WrapAnimateUp step={step}>
              <h3 className="text-[40px] md:text-[46px] lg:text-[64px] xl:text-[80px]">
                Wedding & Event Coverage.
              </h3>
            </WrapAnimateUp>
          </Container>
        </section>
        <section className="py-[40px] border-y !border-Mneutral_200">
          <Container>
            <WrapAnimateUp step={step}>
              <h5 className="text__40 mb-[2.5rem]">
                Weddings and events are filled{"  "}
                <span className="text-Mneutral_400">
                  with fleeting moments laughter, nerves, hugs, and unscripted
                  beauty.
                </span>
              </h5>
              <h5 className="text__40">
                <span className="text-Mneutral_400">
                  My goal is to preserve all of that
                </span>
                , without interrupting the flow of your day. Whether it’s an
                intimate ceremony or a full-day celebration, I’m there to
                document it honestly and artistically.
              </h5>
            </WrapAnimateUp>
          </Container>
        </section>
        <section>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
              <div className="md:col-span-1">
                <h5 className="text__20 opacity-40">What’s Included</h5>
              </div>
              <div className="md:col-span-2">
                <p className="text__20">
                  Your experience includes more than just photos it’s about
                  trust, timing, and storytelling:
                </p>
              </div>
              <div className="md:col-span-4">
                <h5 className="text__32 mb-4">
                  Whether you’re launching a new line or refreshing your
                  content, I focus on visuals that build connection — and drive
                  conversions.
                </h5>
                <div className="grid grid-cols-1">
                  {[
                    "Full-day or half-day coverage tailored to your schedule.",
                    "Pre-event consultation (timeline, shotlist, vibe).",
                    "Optional second shooter for fuller coverage.",
                    "Sneak peek within 48 hours.",
                    "200+ fully edited images delivered within 4–6 weeks.",
                    "Optional fine art photobook or highlight film.",
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
          </Container>
        </section>

        <section>
          <Container>
            <img
              src={originalUrl + "sdsf.png"}
              className="w-full object-cover"
              alt=""
            />

            <div className="py-[40px] grid xs:grid-cols-7">
              <div className="xs:col-span-2"></div>
              <div className="xs:col-span-5">
                <h5 className="text__40">
                  From garden weddings to rooftop receptions, I’ve been honored
                  to capture love stories of all shapes and sizes.{" "}
                  <span className="text-Mneutral_400">
                    Every gallery reflects the couple’s energy, not a template.
                  </span>
                </h5>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-0">
          <Container>
            <h5 className="text__24 opacity-40 mb-[36px]">WEEDING GALLERY</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <img
                src={originalUrl + "s3.png"}
                className="w-full object-cover"
                alt=""
              />
              <img
                src={originalUrl + "s1.png"}
                className="w-full object-cover"
                alt=""
              />
              <img
                src={originalUrl + "s2.png"}
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

export default WeddingEventCoverage;
