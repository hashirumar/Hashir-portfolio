import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import Link from "next/link";
import WrapReviews from "@/Components/Path/WrapReviews";
import ClientList from "@/Components/Path/ClientList";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const Projects = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  // console.log(step);
  return (
    <Fragment>
      <Layout
        step={step}
        title="Projects"
        description="Projects Desc"
        navbar={true}
      >
        <section>
          <Container>
            <WrapAnimateUp step={step}>
              <h3 className="text-[40px] md:text-[46px] lg:text-[64px] xl:ext-[80px]">
                Selected <br className="lg:block hidden" /> Work.
              </h3>
            </WrapAnimateUp>
          </Container>
        </section>
        <section className="pt-0">
          <Container>
            <WrapAnimateUp step={step}>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="">
                  <img
                    src={originalUrl + "gg1.png"}
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src={originalUrl + "gg2.png"}
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="col-span-2 lg:col-span-1 lg:pl-8">
                  <h5 className="text__40">
                    Milan <br className="lg:block hidden" /> Portraits.
                  </h5>
                  <p className="text__20 opacity-60 mt-3 mb-8">
                    Timeless backdrops, natural light, and authentic
                    moments—Milan is the perfect city for stunning portraits.
                  </p>
                  <Link
                    href={"/work/detail/milan-portraits"}
                    className="inline-block px-[24px] py-[10px] rounded-full border !border-Mneutral_900"
                  >
                    <div className="flex items-center gap-2 text__18">
                      DETAILS{" "}
                      <img
                        src={originalUrl + "carbon_arrow-up-right (1).svg"}
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </WrapAnimateUp>
          </Container>
        </section>
        <section>
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="col-span-2 lg:col-span-1 lg:pr-8 order-3 lg:!order-1">
                <h5 className="text__40">
                  Weeding <br className="lg:block hidden" /> Dream.
                </h5>
                <p className="text__20 opacity-60 mt-3 mb-8">
                  Focus on the raw emotions, candid laughter, and heartfelt
                  moments that make your day unforgettable.
                </p>
                <Link
                  href={"/work/detail/weeding-dream"}
                  className="inline-block px-[24px] py-[10px] rounded-full border !border-Mneutral_900"
                >
                  <div className="flex items-center gap-2 text__18">
                    DETAILS{" "}
                    <img
                      src={originalUrl + "carbon_arrow-up-right (1).svg"}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className="lg:order-1">
                <img
                  src={originalUrl + "ee1.png"}
                  className="w-full object-cover"
                  alt=""
                />
              </div>
              <div className="lg:order-1">
                <img
                  src={originalUrl + "ee2.png"}
                  className="w-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="">
                <img
                  src={originalUrl + "oo1.png"}
                  className="w-full object-cover"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  src={originalUrl + "oo2.png"}
                  className="w-full object-cover"
                  alt=""
                />
              </div>
              <div className="col-span-2 lg:col-span-1 lg:pl-8">
                <h5 className="text__40">
                  Commercial <br className="lg:block hidden" />
                  Product.
                </h5>
                <p className="text__20 opacity-60 mt-3 mb-8">
                  Every frame tells a story — from the texture of a product to
                  the confidence of a model in motion. Here’s a curated look
                  into the worlds I’ve captured, where creativity meets purpose.
                </p>
                <Link
                  href={"/work/detail/commercial-product"}
                  className="inline-block px-[24px] py-[10px] rounded-full border !border-Mneutral_900"
                >
                  <div className="flex items-center gap-2 text__18">
                    DETAILS{" "}
                    <img
                      src={originalUrl + "carbon_arrow-up-right (1).svg"}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="col-span-2 lg:col-span-1 lg:pr-8 order-3 lg:!order-1">
                <h5 className="text__40">
                  Fashion <br className="lg:block hidden" />
                  Photography.
                </h5>
                <p className="text__20 opacity-60 mt-3 mb-8">
                  Every frame tells a story — from the texture of a product to
                  the confidence of a model in motion. Here’s a curated look
                  into the worlds I’ve captured, where creativity meets purpose.
                </p>
                <Link
                  href={"/work/detail/fashion-photography"}
                  className="inline-block px-[24px] py-[10px] rounded-full border !border-Mneutral_900"
                >
                  <div className="flex items-center gap-2 text__18">
                    DETAILS{" "}
                    <img
                      src={originalUrl + "carbon_arrow-up-right (1).svg"}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className="lg:order-1">
                <img
                  src={originalUrl + "bb2.png"}
                  className="w-full object-cover"
                  alt=""
                />
              </div>
              <div className="lg:order-1">
                <img
                  src={originalUrl + "bb1.png"}
                  className="w-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </Container>
        </section>

        <ClientList />
        <WrapReviews />
        <BannerContact />
      </Layout>
    </Fragment>
  );
};

export default Projects;
