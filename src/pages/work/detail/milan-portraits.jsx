import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const Index = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();

  // Project configuration - edit this for different projects
  const projectData = {
    title: "TWITCH",
    year: "2025",
    client: "FamilyFund",
    projectYear: "2025",
    service: "Web development, CMS",
    mainImage: "Container.png",
    details: [
      {
        type: "LOCATION",
        desc: "MILAN, ITALY",
      },
      {
        type: "TYPE",
        desc: "LIFESTYLE & PORTRAIT PHOTOGRAPHY",
      },
      {
        type: "ROLE",
        desc: "PHOTOGRAPHER",
      },
      {
        type: "GEAR SETUP",
        desc: "SONY A7III + 50MM F/1.4",
      },
    ],
    techStack: [
      "Frontend (Next.js)",
      "Custom CMS",
      "SEO",
      "Infrastructure",
    ],
    sections: [
      {
        title: "OVERVIEW",
        content: "Milan Portrait is a lifestyle photography series captured in the heart of Milan — a city where timeless architecture meets modern elegance. The series focuses on portraying the natural charm and individuality of the subject, set against the soft textures of historic streets, urban cafés, and golden afternoon light.",
        hasIndent: true,
        indentWord: "Milan",
      },
      {
        title: "CREATIVE DIRECTION",
        content: "The goal was to create a visual narrative that feels effortless yet intentional — blending candid expressions with editorial-style framing. Each shot was guided by the idea of movement, emotion, and presence. Rather than overly posed compositions, I encouraged natural gestures and quiet moments in between.",
        hasIndent: false,
      },
    ],
    stats: [
      {
        value: "25%",
        label: "Less traffic",
      },
      {
        value: "10x",
        label: "Page load times",
      },
      {
        value: "15%",
        label: "Higher infra costs",
      },
      {
        value: "$1.2M",
        label: "Legal fees",
      },
    ],
    relatedWork: [
      "sda.png",
      "rr1.png",
      "rr2.png",
    ],
  };

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
            <h2 className="text__72 my-2 flex justify-center font-medium tracking-tight">
              {projectData.title}
            </h2>
            <p className="text__20 opacity-60 flex justify-center">
              {projectData.year}
            </p>

            <div className="mx-auto max-w-5xl mt-24">
              <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                  <dt className="font-semibold">Client</dt>
                  <dd>{projectData.client}</dd>
                </div>
                <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                  <dt className="font-semibold">Year</dt>
                  <dd>{projectData.projectYear}</dd>
                </div>
                <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                  <dt className="font-semibold">Service</dt>
                  <dd>{projectData.service}</dd>
                </div>
              </dl>
            </div>

            <div className="grid-cols-3 grid">
              <div className="col-span-2">
                <WrapAnimateUp step={step}>
                  {/* <Link href={"/"}>
                    <div className="flex items-center gap-2">
                      <img src={originalUrl + "Back.svg"} alt="" />
                      <p className="opacity-40">BACK</p>
                    </div>
                  </Link> */}
                </WrapAnimateUp>
              </div>
            </div>

            <WrapAnimateUp step={step}>
              <img
                src={originalUrl + projectData.mainImage}
                className="w-full object-cover mt-[2rem] mb-[2rem]"
                alt={projectData.title}
              />
            </WrapAnimateUp>

            <div className="grid grid-cols-1 gap-[2rem]">
              {/* Project Details - First Instance */}
              <div className="grid gap-y-4 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2"></div>
                <div className="md:col-span-3">
                  <div className="grid grid-cols-1">
                    {projectData.details.map((obj, index) => (
                      <div
                        key={`detail-1-${index}`}
                        className="flex items-center justify-between py-[32px] border-b !border-Mneutral_200"
                      >
                        <h5 className="text-[14px] ss:text-[18px] md:text-[20px] lg:text-[24px] opacity-40">
                          {obj.type}
                        </h5>
                        <p className="text-[14px] ss:text-[18px] md:text-[20px] lg:text-[24px]">
                          {obj.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="grid gap-y-4 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">TECH STACK</p>
                </div>
                <div className="md:col-span-3">
                  <div className="my-6 flex flex-wrap gap-2">
                    {projectData.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Sections (Overview, Creative Direction, etc.) */}
              {projectData.sections.map((section, index) => (
                <div key={index} className="grid gap-y-4 grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2">
                    <p className="text__24 opacity-40">{section.title}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h5 className="text__32">
                      {section.hasIndent ? (
                        <>
                          <span className="ml-[5rem]">{section.indentWord}</span>
                          {section.content.replace(section.indentWord, '')}
                        </>
                      ) : (
                        section.content
                      )}
                    </h5>
                  </div>
                </div>
              ))}

              {/* Project Details - Second Instance */}
              <div className="grid gap-y-4 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2"></div>
                <div className="md:col-span-3">
                  <div className="grid grid-cols-1">
                    {projectData.details.map((obj, index) => (
                      <div
                        key={`detail-2-${index}`}
                        className="flex items-center justify-between py-[32px] border-b !border-Mneutral_200"
                      >
                        <h5 className="text-[14px] ss:text-[18px] md:text-[20px] lg:text-[24px] opacity-40">
                          {obj.type}
                        </h5>
                        <p className="text-[14px] ss:text-[18px] md:text-[20px] lg:text-[24px]">
                          {obj.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Statistics Section */}
        <section className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col">
            {projectData.stats.map((stat, index) => (
              <div key={index} className="flex flex-col-reverse border-l pl-8">
                <dt className="mt-2 text-base text-neutral-600">{stat.label}</dt>
                <dd className="font-display text-3xl font-medium text-neutral-950 sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </div>
        </section>

        {/* Related Work */}
        <section className="py-0">
          <Container>
            <h5 className="text__24 opacity-40 mb-[36px]">RELATED WORK</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectData.relatedWork.map((image, index) => (
                <img
                  key={index}
                  src={originalUrl + image}
                  className="w-full object-cover"
                  alt={`Related work ${index + 1}`}
                />
              ))}
            </div>
          </Container>
        </section>

        <BannerContact />
      </Layout>
    </Fragment>
  );
};

export default Index;
// import React, { Fragment } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import useHostname from "@/Components/Provider/HostnameProvider";
// import Layout from "@/Components/Layout/Layout";
// import BannerContact from "@/Components/Path/BannerContact";
// import Link from "next/link";
// import { useStep } from "@/Components/Provider/PageTransitionProvider";
// import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

// const Index = () => {
//   const originalUrl = useHostname() + "/images/";
//   const { step } = useStep();
//   return (
//     <Fragment>
//       <Layout
//         step={step}
//         title="Detail Article"
//         description="Detail Article Desc"
//         navbar={true}
//       >
//         <section>
//           <Container>
// <h2 className="text__72 my-2 flex justify-center font-medium tracking-tight">Milan Portrait</h2>
//                   <p className="text__20 opacity-60 flex justify-center">2024</p>


//           <div className="mx-auto max-w-5xl mt-24">
//                   <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
//                     <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
//                       <dt className="font-semibold">Client</dt>
//                       <dd>FamilyFund</dd>
//                     </div>
//                     <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
//                       <dt className="font-semibold">Year</dt>
//                       <dd>
//                         2023
//                       </dd>
//                     </div>
//                     <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
//                       <dt className="font-semibold">Service</dt>
//                       <dd>Web development, CMS</dd>
//                     </div>
//                   </dl>
//                 </div>        
//             <div className="grid-cols-3 grid">
//               <div className="col-span-2">
//                 <WrapAnimateUp step={step}>
//                   {/* <Link href={"/"}>
//                     <div className="flex items-center gap-2">
//                       <img src={originalUrl + "Back.svg"} alt="" />
//                       <p className="opacity-40">BACK</p>
//                     </div>
//                   </Link> */}
                  
//                 </WrapAnimateUp>
//               </div>
//             </div>
//             <WrapAnimateUp step={step}>
//               <img
//                 src={originalUrl + "Container.png"}
//                 className="w-full object-cover mt-[2rem] mb-[2rem]"
//                 alt=""
//               />
//             </WrapAnimateUp>

//             <div className="grid grid-cols-1 gap-[2rem]">
//             <div className="grid gap-y-4 grid-cols-1 md:grid-cols-5">
//                 <div className="md:col-span-2"></div>
//                 <div className="md:col-span-3">
//                   <div className="grid grid-cols-1">
//                     {[
//                       {
//                         type: "LOCATION",
//                         desc: "MILAN, ITALY",
//                       },
//                       {
//                         type: "TYPE",
//                         desc: " LIFESTYLE & PORTRAIT PHOTOGRAPHY",
//                       },
//                       {
//                         type: "ROLE",
//                         desc: "PHOTOGRAPHER",
//                       },
//                       {
//                         type: "GEAR SETUP",
//                         desc: "SONY A7III + 50MM F/1.4",
//                       },
//                     ].map((obj) => {
//                       return (
//                         <>
//                           <div className="flex items-center justify-between py-[32px] border-b !border-Mneutral_200">
//                             <h5 className="text-[14px] ss:text-[18px] md:text-[20px] lg:text-[24px] opacity-40">
//                               {obj.type}
//                             </h5>
//                             <p className="text-[14px] ss:text-[18px] md:text-[20px] lg:text-[24px]">
//                               {obj.desc}
//                             </p>
//                           </div>
//                         </>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             <div className="grid gap-y-4 grid-cols-1 md:grid-cols-5">
//                 <div className="md:col-span-2">
//                   <p className="text__24 opacity-40">TECH STACK</p>
//                 </div>
//                 <div className="md:col-span-3">
//                   <div className="my-6 flex flex-wrap gap-2">
//       <span className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900">
//         Frontend (Next.js)
//       </span>
//       <span className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900">
//         Custom CMS
//       </span>
//       <span className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900">
//         SEO
//       </span>
//       <span className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900">
//         Infrastructure
//       </span>
//     </div>
//                 </div>
//               </div>
//               <div className="grid gap-y-4 grid-cols-1 md:grid-cols-5">
//                 <div className="md:col-span-2">
//                   <p className="text__24 opacity-40">OVERVIEW</p>
//                 </div>
//                 <div className="md:col-span-3">
//                   <h5 className="text__32">
//                     <span className="ml-[5rem]">Milan</span> Portrait is a
//                     lifestyle photography series captured in the heart of Milan
//                     — a city where timeless architecture meets modern elegance.
//                     The series focuses on portraying the natural charm and
//                     individuality of the subject, set against the soft textures
//                     of historic streets, urban cafés, and golden afternoon
//                     light.
//                   </h5>
//                 </div>
//               </div>
//               <div className="grid gap-y-4 grid-cols-1 md:grid-cols-5">
//                 <div className="md:col-span-2">
//                   <p className="text__24 opacity-40">CREATIVE DIRECTION</p>
//                 </div>
//                 <div className="md:col-span-3">
//                   <h5 className="text__32">
//                     The goal was to create a visual narrative that feels
//                     effortless yet intentional — blending candid expressions
//                     with editorial-style framing. Each shot was guided by the
//                     idea of movement, emotion, and presence. Rather than overly
//                     posed compositions, I encouraged natural gestures and quiet
//                     moments in between.
//                   </h5>
//                 </div>
//               </div>
              
//               <div className="grid gap-y-4 grid-cols-1 md:grid-cols-5">
//                 <div className="md:col-span-2"></div>
//                 <div className="md:col-span-3">
//                   <div className="grid grid-cols-1">
//                     {[
//                       {
//                         type: "LOCATION",
//                         desc: "MILAN, ITALY",
//                       },
//                       {
//                         type: "TYPE",
//                         desc: " LIFESTYLE & PORTRAIT PHOTOGRAPHY",
//                       },
//                       {
//                         type: "ROLE",
//                         desc: "PHOTOGRAPHER",
//                       },
//                       {
//                         type: "GEAR SETUP",
//                         desc: "SONY A7III + 50MM F/1.4",
//                       },
//                     ].map((obj) => {
//                       return (
//                         <>
//                           <div className="flex items-center justify-between py-[32px] border-b !border-Mneutral_200">
//                             <h5 className="text-[14px] ss:text-[18px] md:text-[20px] lg:text-[24px] opacity-40">
//                               {obj.type}
//                             </h5>
//                             <p className="text-[14px] ss:text-[18px] md:text-[20px] lg:text-[24px]">
//                               {obj.desc}
//                             </p>
//                           </div>
//                         </>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Container>
//         </section>

//         <section className="mx-auto max-w-7xl">
//           <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col">
//       {/* Item 1 */}
//       <div className="flex flex-col-reverse border-l pl-8">
//         <dt className="mt-2 text-base text-neutral-600">Less traffic</dt>
//         <dd className="font-display text-3xl font-medium text-neutral-950 sm:text-4xl">
//           25%
//         </dd>
//       </div>

//       {/* Item 2 */}
//       <div className="flex flex-col-reverse border-l pl-8">
//         <dt className="mt-2 text-base text-neutral-600">Page load times</dt>
//         <dd className="font-display text-3xl font-medium text-neutral-950 sm:text-4xl">
//           10x
//         </dd>
//       </div>

//       {/* Item 3 */}
//       <div className="flex flex-col-reverse border-l pl-8">
//         <dt className="mt-2 text-base text-neutral-600">Higher infra costs</dt>
//         <dd className="font-display text-3xl font-medium text-neutral-950 sm:text-4xl">
//           15%
//         </dd>
//       </div>

//       {/* Item 4 */}
//       <div className="flex flex-col-reverse border-l pl-8">
//         <dt className="mt-2 text-base text-neutral-600">Legal fees</dt>
//         <dd className="font-display text-3xl font-medium text-neutral-950 sm:text-4xl">
//           $1.2M
//         </dd>
//       </div>
//     </div>
//         </section>
//         <section className="py-0">
//           <Container>
//             <h5 className="text__24 opacity-40 mb-[36px]">RELATED WORK</h5>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               <img
//                 src={originalUrl + "sda.png"}
//                 className="w-full object-cover"
//                 alt=""
//               />
//               <img
//                 src={originalUrl + "rr1.png"}
//                 className="w-full object-cover"
//                 alt=""
//               />
//               <img
//                 src={originalUrl + "rr2.png"}
//                 className="w-full object-cover"
//                 alt=""
//               />
//             </div>
//           </Container>
//         </section>

//         <BannerContact />
//       </Layout>
//     </Fragment>
//   );
// };

// export default Index;
