import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import ParallaxImage from "@/Components/ParallaxImage/ParallaxImage";
const Index = () => {
  const originalUrl = useHostname() + "/images/";

  return (
    <Fragment>
      <Layout    
        title="Detail Article"
        description="Detail Article Desc"
        navbar={true}
      >
        {/* Project Header */}
        <section>
          <Container>
            <h2 className="text-[220px] opacity-60 font-db mt-12 font-bold mb-[32px] flex justify-center ">
              SPORTS FEST
            </h2>
            <p className="text__20 opacity-60 flex justify-center">2025</p>
             
             

            {/* Main Image */}
            <img
              src={originalUrl + "Container.png"}
              className="w-full h-[700px] rounded-2xl object-cover mt-[1rem] mb-[1rem]"
              alt="SPORTS FEST"
            />

            {/* Sections */}
            <div className="grid grid-cols-1 gap-[1rem]">
              {/* Section 1 */}
              <div className="grid grid-cols-1 md:grid-cols-6">
                <div className="md:col-span-3">
                  <p className="text__48 uppercase font-db tracking-[2px] opacity-60">
                    OVERVIEW
                  </p>
                </div>
                <div className="md:col-span-3 ml-12">
                  <h5 className="text__14 leading-[1.2] font-am uppercase opacity-80 ">
                    <span className="ml-[5rem]">Twitch Clone</span> This Twitch
                    Clone is a full-featured livestreaming platform built with
                    Next.js 14. It allows anyone to stream using RTMP/WHIP
                    protocols, supports OBS software, and provides real-time
                    chat, live viewer counts, user management, and a fully
                    responsive modern UI. The app mimics Twitch's most important
                    workflows—streamer dashboard, follower system,
                    blocking/kicking users, and chat moderation. Authentication
                    is powered by Clerk, streaming via LiveKit, and storage with
                    MySQL.
                  </h5>
                </div>
              </div>
               
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
  {/* First image */}
  <div className="w-full rounded-xl h-[340px] md:h-[400px] lg:h-[550px] xl:h-[638px] relative overflow-hidden ">
    <img
      src={originalUrl + "Container.png"}
      className="w-full h-full object-cover"
      alt="SPORTS FEST"
    />
  </div>

  {/* Second image */}
  <div className="w-full rounded-xl h-[340px] md:h-[400px] lg:h-[550px] xl:h-[638px] relative overflow-hidden ">
    <img
      src={originalUrl + "Container.png"}
      className="w-full h-full object-cover"
      alt="SPORTS FEST secondary"
    />
  </div>
</div>
         
       <img
              src={originalUrl + "Container.png"}
              className="w-full rounded-xl h-[340px] md:h-[400px] lg:h-[550px] xl:h-[638px] object-cover relative overflow-hidden"
              alt="SPORTS FEST"
            />

              {/* Section 2 */}
              <div className="grid  grid-cols-1 md:grid-cols-6">
                <div className="md:col-span-3">
                  <p className="text__48 font-db uppercase tracking-[2px] opacity-60">
                    FEATURES & EXPERIENCE
                  </p>
                </div>
                <div className="md:col-span-3 ml-12">
                  <h5 className="text__14 leading-[1.2] font-am uppercase opacity-80 ">
                    Key features include live statuses, instant chat (with slow
                    mode, follower-only mode, enable/disable options, and
                    colored usernames), thumbnail uploads for streams, and
                    dashboards for both viewers and creators. Built with SSR,
                    route groups, custom layouts, and real-time APIs using
                    Next.js. Developed as an in-depth learning and demonstration
                    project for advanced React and full-stack development
                    patterns.
                  </h5>
                </div>
              </div>
            </div>
          </Container>
        </section>
         

        {/* Related Work */}
        <section className="py-0">
          <Container>
            <h5 className="text__24 opacity-40 mb-[36px]">RELATED WORK</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <img
                src={originalUrl + "sda.png"}
                className="w-full object-cover"
                alt="Related work 1"
              />
              <img
                src={originalUrl + "rr1.png"}
                className="w-full object-cover"
                alt="Related work 2"
              />
              <img
                src={originalUrl + "rr2.png"}
                className="w-full object-cover"
                alt="Related work 3"
              />
            </div>
          </Container>
        </section>
      </Layout>
    </Fragment>
  );
};

export default Index;
