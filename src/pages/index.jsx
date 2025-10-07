 import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import WrapImageLogo from "@/Components/Path/WrapImageLogo";
import WrapTextLine from "@/Components/Path/WrapTextLine";
import Link from "next/link";
import WrapServices from "@/Components/Path/WrapServices";
import BannerContact from "@/Components/Path/BannerContact";
import WrapReviews from "@/Components/Path/WrapReviews";
import WrapWork from "@/Components/Path/WrapWork";
import TextAnimation from "@/Components/Path/TextAnimation";
import KobeName from "@/Components/Path/KobeName";
import WrapHowItWork from "@/Components/Path/WrapHowItWork";

const Index = () => {
  const originalUrl = useHostname() + "/images/";

  // Removed step state and useEffect for animation
  // const [step, setStep] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setStep((prevStep) => {
  //       if (prevStep === 4) {
  //         clearInterval(interval); // Hentikan interval setelah mencapai 6
  //         return prevStep;
  //       }
  //       return prevStep + 1; // Pindah ke langkah berikutnya
  //     });
  //   }, 1000); // Interval 1 detik

  //   // Membersihkan interval saat komponen unmount
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Fragment>
      <Layout
        title="✱ HASHIR"
        description="✱ PORTFOLIO"
        navbar={true}
        useHeight={false}
        step={4} // Pass final step value to prevent layout issues
        initial={false} // Disable mount animations
      >
        <section className="pt-[40px] md:pt-[70px] pb-0">
          <Container>
            {/* <KobeName step={4} initial={false} animate={{ opacity: 1 }} />  */}
            <div className="flex justify-between items-start">
            <div>
            <h1 className="text-6xl font-medium text-[#151515]">AUTOMATED RISK ANALYSIS<br/>
          FOR CONSTRUCTION</h1>
          <div className="mt-[20px] flex gap-56">
              <div>
                <p className="text-[#6E6E6E] text-[0.85rem] font-medium">Full </p>
                <p className="text-[#6E6E6E] text-[0.85rem] font-medium">Stack Dev.</p>
              </div>
              <div>
                <p className="text-[#6E6E6E] text-[0.85rem] font-medium">UI</p>
                <p className="text-[#6E6E6E] text-[0.85rem] font-medium">Designer.</p>
              </div>
              <div>
                <p className="text-[#6E6E6E] text-[0.85rem] font-medium">Visual</p>
                <p className="text-[#6E6E6E] text-[0.85rem] font-medium">Designer.</p>
              </div>
            </div>
            </div>
            <div className="w-[300px] pt-2">
            <p className="text-[#5E5E5E] text-[0.85rem] leading-relaxed">
              Photography is more than just taking pictures—it's about preserving emotions, details, and memories that last a lifetime.
            </p>
          </div>
          </div>


            {/* <div className="grid md:grid-cols-2 gap-4 mt-[40px] md:mt-[80px]">
              <div className="h-full flex flex-wrap">
                <p className="text__32 overflow-hidden">
                  <span className=" ml-8 transition-all duration-700 inline-block translate-x-0">
                    Capturing Moments,
                  </span>{" "}
                  <br />{" "}
                  <span className="transition-all duration-700 inline-block translate-x-0">
                    Telling Stories.
                  </span>
                </p>
                <div className="w-full self-end inline-block">
                  <p className="text__18 md:inline-block hidden overflow-hidden transition-all duration-700 max-w-[100vw]">
                    <span className="w-max inline-block">
                      SCROLL TO EXPLORE
                    </span>
                  </p>
                </div>
              </div>
              <div className="md:mt-0 mt-[100px]">
                <div className="overflow-hidden w-[200px] ss:w-[250px] md:w-[350px] h-[190px] ss:h-[220px] md:h-[295px]">
                  <div className="transition-all duration-700" style={{ opacity: 1 }}> 
                    <WrapImageLogo />
                  </div>
                </div>
           
                <div className="text__32 mt-[20px] md:mt-[40px]">
                  <TextAnimation isVisible={true}>  
                    <span className="ml-8">Photography is more than just</span>{" "}
                    <span className="xl:block hidden"><br /></span> taking pictures—it's
                    about preserving <span className="xl:block hidden"><br /></span>{" "}
                    emotions, details, and memories that{" "}
                    <span className="xl:block hidden"><br /></span> last a lifetime.
                  </TextAnimation>
                </div>
              </div>
            </div> */}

            {/* <div className="text-center md:hidden">
              <p className="text__18 w-full mt-[48px]">SCROLL TO EXPLORE</p>
            </div> */}
          </Container>
        </section>

        {/* <section className="py-[48px]">
          <Container>
            <div className="flex items-center justify-between w-[706px] mx-auto relative left-1/2 -translate-x-1/2 md:w-full">
              {[
                originalUrl + "lg1.svg",
                originalUrl + "lg2.svg",
                originalUrl + "lg3.svg",
                originalUrl + "lg4.svg",
                originalUrl + "lg5.svg",
              ].map((obj, index) => {
                return (
                  <img
                    key={index}
                    src={obj}
                    className="transition-all duration-300 opacity-30 hover:opacity-100  xl:w-auto w-[120px]"
                    alt=""
                  />
                );
              })}
            </div>
          </Container>
        </section> */}

        {/* <section className="pt-0">
          <Container>
            <WrapTextLine />
          </Container>
        </section> */}

        <section>
          <Container>
            {/* <h5 className="text__24 opacity-40 mb-[36px]">OUR WORK</h5> */}

            <WrapWork />
          </Container>
        </section>
        
        <section>
          <Container>
            <h5 className="text__24 opacity-40 mb-[48px] md:mb-[68] lg:mb-[140px]">
              SERVICES
            </h5>
          </Container>
          <WrapServices />

          <Container>
            <div className="mt-[36px] md:mt-[50px] lg:mt-[100px]">
              <p className="text__32">
                <span className="ml-8">Tailored Photography</span> <br /> for
                Every Occasion.
              </p>
            </div>
          </Container>
        </section>

        {/* <WrapHowItWork /> */}
        
        {/* <WrapReviews /> */}

        <BannerContact />
      </Layout>
    </Fragment>
  );
};

export default Index;
 // import React, { Fragment, useEffect, useState } from "react";
  // import { Col, Container, Row } from "react-bootstrap";
  // import useHostname from "@/Components/Provider/HostnameProvider";
  // import Layout from "@/Components/Layout/Layout";
  // import WrapImageLogo from "@/Components/Path/WrapImageLogo";
  // import WrapTextLine from "@/Components/Path/WrapTextLine";
  // import Link from "next/link";
  // import WrapServices from "@/Components/Path/WrapServices";
  // import BannerContact from "@/Components/Path/BannerContact";
  // import WrapReviews from "@/Components/Path/WrapReviews";
  // import WrapWork from "@/Components/Path/WrapWork";
  // import TextAnimation from "@/Components/Path/TextAnimation";
  // import KobeName from "@/Components/Path/KobeName";
  // import WrapHowItWork from "@/Components/Path/WrapHowItWork";

  // const Index = () => {
  //   const originalUrl = useHostname() + "/images/";

  //   const [step, setStep] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setStep((prevStep) => {
  //         if (prevStep === 4) {
  //           clearInterval(interval); // Hentikan interval setelah mencapai 6
  //           return prevStep;
  //         }
  //         return prevStep + 1; // Pindah ke langkah berikutnya
  //       });
  //     }, 1000); // Interval 1 detik

  //     // Membersihkan interval saat komponen unmount
  //     return () => clearInterval(interval);
  //   }, []);
  //   return (
  //     <Fragment>
  //       <Layout
  //         title="✱ JACOB"
  //         description="✱ JACOB Desc"
  //         navbar={true}
  //         useHeight={step >= 3 ? false : true}
  //         step={step}
  //       >


  //         <section className="pt-[40px] md:pt-[80px] pb-0">
  //           <Container>
  //             <KobeName step={step} />

  //             <div className="grid md:grid-cols-2 gap-4 mt-[40px] md:mt-[80px]">
  //               <div className="h-full flex flex-wrap">
  //                 <p className="text__32 overflow-hidden">
  //                   <span
  //                     className={
  //                       "ml-8 transition-all duration-700 inline-block " +
  //                       (step > 3
  //                         ? " translate-x-0"
  //                         : "-translate-x-[5rem] translate-y-[2rem] opacity-0")
  //                     }
  //                   >
  //                     Capturing Moments,
  //                   </span>{" "}
  //                   <br />{" "}
  //                   <span
  //                     className={
  //                       "transition-all duration-700 inline-block " +
  //                       (step > 3
  //                         ? " translate-x-0"
  //                         : "translate-x-[5rem] translate-y-[2rem] opacity-0")
  //                     }
  //                   >
  //                     Telling Stories.
  //                   </span>
  //                 </p>
  //                 <div className="w-full self-end inline-block">
  //                   <p
  //                     className={
  //                       "text__18 md:inline-block hidden overflow-hidden transition-all duration-700 " +
  //                       (step > 3 ? "max-w-[100vw]" : "max-w-0")
  //                     }
  //                   >
  //                     <span className="w-max inline-block">
  //                       SCROLL TO EXPLORE
  //                     </span>
  //                   </p>
  //                 </div>
  //               </div>
  //               <div className="md:mt-0 mt-[100px]">
  //                 <div className="overflow-hidden w-[200px] ss:w-[250px] md:w-[350px] h-[190px] ss:h-[220px] md:h-[295px]">
  //                   <div
  //                     className={
  //                       "transition-all duration-700 " +
  //                       (step > 3 ? "" : "translate-y-[400px]")
  //                     }
  //                   >
  //                     <WrapImageLogo />
  //                   </div>
  //                 </div>

  //                 <p className="text__32 mt-[20px] md:mt-[40px]">
  //                   <TextAnimation isVisible={step > 3 ? true : false}>
  //                     <span className="ml-8">Photography is more than just</span>{" "}
  //                     <br className="xl:block hidden" /> taking pictures—it’s
  //                     about preserving <br className="xl:block hidden" />{" "}
  //                     emotions, details, and memories that{" "}
  //                     <br className="xl:block hidden" /> last a lifetime.
  //                   </TextAnimation>
  //                 </p>
  //               </div>
  //             </div>

  //             <div className="text-center md:hidden">
  //               <p className="text__18 w-full mt-[48px]">SCROLL TO EXPLORE</p>
  //             </div>
  //           </Container>
  //         </section>

  //         <section className="py-[48px]">
  //           <Container>
  //             <div className="flex items-center justify-between w-[706px] mx-auto relative left-1/2 -translate-x-1/2 md:w-full">
  //               {[
  //                 originalUrl + "lg1.svg",
  //                 originalUrl + "lg2.svg",
  //                 originalUrl + "lg3.svg",
  //                 originalUrl + "lg4.svg",
  //                 originalUrl + "lg5.svg",
  //               ].map((obj) => {
  //                 return (
  //                   <>
  //                     <img
  //                       src={obj}
  //                       className="transition-all duration-300 opacity-30 hover:opacity-100  xl:w-auto w-[120px]"
  //                       alt=""
  //                     />
  //                   </>
  //                 );
  //               })}
  //             </div>
  //           </Container>
  //         </section>

  //         {/* <section className="pt-0">
  //           <Container>
  //             <WrapTextLine />
  //           </Container>
  //         </section> */}

  //         <section>
  //           <Container>
  //             <h5 className="text__24 opacity-40 mb-[36px]">OUR WORK</h5>

  //             <WrapWork />
  //           </Container>
  //         </section>
          
  //         <section>
  //           <Container>
  //             <h5 className="text__24 opacity-40 mb-[48px] md:mb-[68] lg:mb-[140px]">
  //               SERVICES
  //             </h5>
  //           </Container>
  //           <WrapServices />

  //           <Container>
  //             <div className="mt-[36px] md:mt-[50px] lg:mt-[100px]">
  //               <p className="text__32">
  //                 <span className="ml-8">Tailored Photography</span> <br /> for
  //                 Every Occasion.
  //               </p>
  //             </div>
  //           </Container>
  //         </section>

  //         {/* <WrapHowItWork /> */}
          
        

  //         <WrapReviews />

  //         <BannerContact />
  //       </Layout>
  //     </Fragment>
  //   );
  // };

  // export default Index;
