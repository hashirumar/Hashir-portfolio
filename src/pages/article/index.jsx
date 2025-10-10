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
  
  return (
    <Fragment>
      <Layout
       
        title="Article"
        description="Article Desc"
        navbar={true}
      >
        <section>
          <Container>
            <WrapAnimateUp step={step}></WrapAnimateUp>
          </Container>
          <WrapAnimateUp step={step}>
            <div className="grid grid-cols-1">
              {[
                {
                  date: "2025-04-09",
                  img: originalUrl + "tt3.png",
                  title:
                    "Framing Emotion: How I Direct Portraits Without Making Them Feel Stiff.",
                  desc: "Over the years, I’ve learned that directing portraits isn’t about telling someone where to stand or how to smile — it’s about building trust in just a few minutes.",
                  link: "/article/detail/framing-emotion-how-i-direct-portraits-without-making-them-feel-stiff",
                },
                {
                  date: "2025-04-09",
                  img: originalUrl + "tt1.png",
                  title: "Golden Hour Magic: Why I Always Chase the Light",
                  desc: "There’s a reason photographers obsess over golden hour — that warm, soft light just before sunset (or right after sunrise) makes everything look cinematic",
                  link: "/article/detail/framing-emotion-how-i-direct-portraits-without-making-them-feel-stiff",
                },
                {
                  date: "2025-04-09",
                  img: originalUrl + "tt2.png",
                  title:
                    "The Importance of Observation: Learning to See Before You Shoot",
                  desc: "They started with noticing. A glimmer of light on a wall. The way someone sits when they think no one’s watching. The rhythm of people walking on a rainy street.",
                  link: "/article/detail/framing-emotion-how-i-direct-portraits-without-making-them-feel-stiff",
                },
              ].map((obj) => {
                return (
                  <div className="py-[40px] border-b !border-Mneutral_200">
                    <Container>
                      <div className="grid grid-cols-1 md:grid-cols-8 gap-[24px] xl:gap-[64px]">
                        <div className="md:col-span-2 xl:col-span-1">
                          <p className="text__18 opacity-40">{obj.date}</p>
                        </div>
                        <div className="md:col-span-3">
                          <img
                            src={obj.img}
                            className="object-cover w-full"
                            alt=""
                          />
                        </div>
                        <div className="md:col-span-3 xl:col-span-4 flex flex-wrap gap-4">
                          <div className="">
                            <h4 className="text__40 mb-2">{obj.title}</h4>
                            <p className="text__18 opacity-60">{obj.desc}</p>
                          </div>
                          <div className="self-end">
                            <Link
                              href={obj.link}
                              className="inline-block text__18 px-[24px] py-[16px] rounded-full border !border-Mneutral_900"
                            >
                              READ ARTICLE
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Container>
                  </div>
                );
              })}
            </div>
          </WrapAnimateUp>
        </section>

        <BannerContact />
      </Layout>
    </Fragment>
  );
};

export default Index;
