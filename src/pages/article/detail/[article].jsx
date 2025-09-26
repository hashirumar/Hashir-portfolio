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
              <div className="col-span-3 lg:col-span-2">
                <WrapAnimateUp step={step}>
                  <Link href={"/article"}>
                    <div className="flex items-center gap-2">
                      <img src={originalUrl + "Back.svg"} alt="" />
                      <p className="opacity-40">BACK</p>
                    </div>
                  </Link>
                  <h2 className="text__64 my-2">
                    Framing Emotion: How I Direct Portraits Without Making Them
                    Feel Stiff.
                  </h2>
                  <p className="text__20 opacity-60">2025-04-09</p>
                </WrapAnimateUp>
              </div>
            </div>
            <div className="grid-cols-3 grid mt-[5rem]">
              <div className="lg:col-span-1"></div>
              <div className="col-span-3 lg:col-span-2">
                <div className="opacity-80 grid grid-cols-1 gap-[24px]">
                  <WrapAnimateUp step={step}>
                    <div className=" grid grid-cols-1 gap-[24px]">
                      <p className="text__20">
                        If there’s one question I get asked a lot, it’s this:
                      </p>
                      <h3 className="text__32">
                        “How do you get people to look so natural in your
                        portraits?”
                      </h3>
                      <div className="">
                        <p className="text__20">
                          The answer isn’t about camera settings, fancy gear, or
                          magical lighting (though all of that helps). It’s
                          about connection. Energy. Trust.
                        </p>
                        <p className="text__20">
                          And most of all — direction that feels more like a
                          conversation than a photoshoot.
                        </p>
                      </div>
                      <img
                        src={originalUrl + "sd.png"}
                        className="w-full object-cover"
                        alt=""
                      />
                    </div>
                  </WrapAnimateUp>
                  <h5 className="text__24">Step 1: Talk before you shoot</h5>
                  <p className="text__20">
                    I never just say “stand there and smile.” Instead, I start
                    talking — even before the camera comes out of the bag. I ask
                    about their day, what kind of music they love, or what
                    brought them to the shoot in the first place. The goal is to
                    make it feel less like a session and more like hanging out
                    with a friend who happens to be holding a camera.
                  </p>

                  <h5 className="text__24">Step 2: Create space to move</h5>
                  <div className="">
                    <p className="text__20">
                      I almost never ask someone to hold a stiff pose for too
                      long.
                    </p>
                    <p className="text__20">I’ll say things like:</p>
                  </div>
                  <div className="">
                    <p className="text__20">
                      “Take a slow breath in and out — that’s the shot.”
                    </p>
                    <p className="text__20">
                      “Look off to the side like you just saw something
                      interesting.”
                    </p>
                    <p className="text__20">
                      “Walk toward me like you’re meeting someone you love.”
                    </p>
                  </div>
                  <p className="text__20">
                    Giving movement-based prompts instead of rigid instructions
                    helps bring out micro-expressions, natural posture, and —
                    most importantly — emotion.
                  </p>

                  <h5 className="text__24">
                    Step 3: Catch the in-between moments
                  </h5>
                  <div className="">
                    <p className="text__20">
                      Some of my favorite shots happen right after a laugh, or
                      in that quiet pause before the next direction. That
                      half-second when they think I’m not shooting? I am.
                    </p>
                    <p className="text__20">
                      I live for those in-between frames — the imperfect, the
                      unscripted, the real.
                    </p>
                  </div>
                  <h5 className="text__24">Step 4: Let go of perfection</h5>
                  <div className="">
                    <p className="text__20">
                      One of the biggest blocks for a natural portrait is
                      overthinking.
                    </p>
                    <p className="text__20">
                      And guess what? That applies to both the subject and the
                      photographer.
                    </p>
                  </div>
                  <div className="">
                    <p className="text__20">
                      I remind myself (and them) that portraits aren’t about
                      looking flawless.
                    </p>
                    <p className="text__20">
                      They’re about feeling something. A softness in the eyes. A
                      hint of joy. A quiet strength.
                    </p>
                    <p className="text__20">
                      Sometimes the hair is messy or the pose is asymmetrical —
                      but if it feels honest, it’s more powerful than anything
                      perfectly staged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-0">
          <Container>
            <h5 className="text__24 opacity-40 mb-[36px]">MORE ARTICLE</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="w-full relative overflow-hidden wrapArticleCard">
                <img
                  src={originalUrl + "rr3.png"}
                  className="w-full object-cover"
                  alt=""
                />
                <Link
                  href={"#!"}
                  className="text-white w-[90%] absolute left-1/2 -translate-x-1/2 -bottom-[20rem] linkWrap transition-all duration-300"
                >
                  <p className="text__16 opacity-60 mb-1">2025-04-09</p>
                  <h5 className="text__24">
                    Golden Hour Magic: Why I Always Chase the Light
                  </h5>
                </Link>
              </div>
              <div className="w-full relative overflow-hidden wrapArticleCard">
                <img
                  src={originalUrl + "rr1.png"}
                  className="w-full object-cover"
                  alt=""
                />
                <Link
                  href={"#!"}
                  className="text-white w-[90%] absolute left-1/2 -translate-x-1/2 -bottom-[20rem] linkWrap transition-all duration-300"
                >
                  <p className="text__16 opacity-60 mb-1">2025-04-09</p>
                  <h5 className="text__24">
                    Golden Hour Magic: Why I Always Chase the Light
                  </h5>
                </Link>
              </div>
              <div className="w-full relative overflow-hidden wrapArticleCard">
                <img
                  src={originalUrl + "rr2.png"}
                  className="w-full object-cover"
                  alt=""
                />
                <Link
                  href={"#!"}
                  className="text-white w-[90%] absolute left-1/2 -translate-x-1/2 -bottom-[20rem] linkWrap transition-all duration-300"
                >
                  <p className="text__16 opacity-60 mb-1">2025-04-09</p>
                  <h5 className="text__24">
                    Golden Hour Magic: Why I Always Chase the Light
                  </h5>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <BannerContact />
      </Layout>
    </Fragment>
  );
};

export default Index;
