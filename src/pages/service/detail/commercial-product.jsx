import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const CommercialProduct = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  return (
    <Fragment>
      <Layout
        step={step}
        title="Commercial Product"
        description="Commercial Product Desc"
        navbar={true}
      >
        <section>
          <Container>
            <WrapAnimateUp step={step}>
              <h3 className="text-[40px] md:text-[46px] lg:text-[64px] xl:text-[80px]">
                Commercial Product.
              </h3>
            </WrapAnimateUp>
          </Container>
        </section>
        <section className="py-[40px] border-y !border-Mneutral_200">
          <Container>
            <WrapAnimateUp step={step}>
              <h5 className="text__40">
                I help brands bring their products to life{"  "}
                <span className="text-Mneutral_400">
                  with photography that’s crisp, intentional, and aligned with
                  their identity.
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
                    Your shoot package is built to elevate your product and
                    streamline your workflow:
                  </p>
                </div>
                <div className="md:col-span-4">
                  <h5 className="text__32 mb-4">
                    Whether you’re launching a new line or refreshing your
                    content, I focus on visuals that build connection — and
                    drive conversions.
                  </h5>
                  <div className="grid grid-cols-1">
                    {[
                      "Pre-shoot planning session to define goals and mood.",
                      "Studio or lifestyle shoot based on your needs.",
                      "Props, styling, and creative direction included (on request).",
                      "10–50 high-quality edited images depending on the package.",
                      "Usage license for e-commerce, campaign, or social.",
                      "Web and print-ready formats.",
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
              src={originalUrl + "dfdsf.png"}
              className="w-full object-cover"
              alt=""
            />

            <div className="py-[40px] grid xs:grid-cols-7">
              <div className="xs:col-span-2"></div>
              <div className="xs:col-span-5">
                <h5 className="text__40">
                  I’ve worked with skincare, tech, F&B, and homeware brands to
                  create scroll-stopping visuals — both minimalist and vibrant.{" "}
                  <span className="text-Mneutral_400">
                    Let’s show your audience what your product really feels
                    like.
                  </span>
                </h5>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-0">
          <Container>
            <h5 className="text__24 opacity-40 mb-[36px]">
              COMMERCIAL PROJECTS
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <img
                src={originalUrl + "r3.png"}
                className="w-full object-cover"
                alt=""
              />
              <img
                src={originalUrl + "r1.png"}
                className="w-full object-cover"
                alt=""
              />
              <img
                src={originalUrl + "r2.png"}
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

export default CommercialProduct;
