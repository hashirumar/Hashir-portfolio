// components/PageTransitionProvider.js
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import useHostname from "./HostnameProvider";

// StepContext for managing the step globally
const StepContext = createContext();

export const useStep = () => useContext(StepContext);

export const PageTransitionProvider = ({ children }) => {
  const [step, setStep] = useState(4); // Start at step 4 (final step)
  const [inTransition, setInTransition] = useState(false);
  const router = useRouter();

  const originalUrl = useHostname() + "/images/";
  
  // Monitor route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setInTransition(true); // Start transition when route changes
    };

    // Once the transition ends, reset the transition state
    const handleTransitionEnd = () => {
      setInTransition(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleTransitionEnd);
    router.events.on("routeChangeError", handleTransitionEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleTransitionEnd);
      router.events.off("routeChangeError", handleTransitionEnd);
    };
  }, [router.events]);

  // Immediately set step to 4 (final step) when route changes
  useEffect(() => {
    setStep(4); // No delay, instant content visibility
  }, [router.pathname]);

  return (
    <StepContext.Provider value={{ step, setStep }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.pathname}
          initial={{
            opacity: 0,
            pointerEvents: "none",
          }}
          animate={{
            opacity: 0, // Always hidden (no loading screen)
            pointerEvents: "none", // Always disabled
          }}
          className={
            "fixed w-full h-full left-0 top-0 z-[99] overflow-hidden transition-all duration-300 bg-Mneutral_900 opacity-0 pointer-events-none"
          }
        >
          <motion.img
            initial={{
              x: "-50%",
              y: "-50%",
              scale: 1,
              rotate: "0deg",
            }}
            animate={{
              x: "-50%",
              y: "-50%",
              scale: 1,
              rotate: "0deg",
            }}
            transition={{
              duration: 0.9,
              ease: "easeInOut",
            }}
            src={originalUrl + "sdasd.svg"}
            className="absolute left-1/2 top-1/2 z-[3]"
            alt=""
          />
        </motion.div>

        <motion.div
          key={router.pathname} // Each page transition is identified by pathname
          initial={{ opacity: 1 }} // Start visible
          animate={{
            opacity: 1, // Always visible (instant content load)
          }}
          exit={{ opacity: 0 }} // Fade out when leaving the page
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </StepContext.Provider>
  );
};

// In PageTransitionProvider.js
export default PageTransitionProvider;




// import { createContext, useContext, useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { motion, AnimatePresence } from "framer-motion";
// import useHostname from "./HostnameProvider";

// // StepContext for managing the step globally
// const StepContext = createContext();

// export const useStep = () => useContext(StepContext);

// export const PageTransitionProvider = ({ children }) => {
//   const [step, setStep] = useState(0);
//   const [inTransition, setInTransition] = useState(false);
//   const router = useRouter();

//   const originalUrl = useHostname() + "/images/";
//   // Monitor route changes
//   useEffect(() => {
//     const handleRouteChange = () => {
//       setInTransition(true); // Start transition when route changes
//     };

//     // Once the transition ends, reset the transition state
//     const handleTransitionEnd = () => {
//       setInTransition(false);
//     };

//     router.events.on("routeChangeStart", handleRouteChange);
//     router.events.on("routeChangeComplete", handleTransitionEnd);
//     router.events.on("routeChangeError", handleTransitionEnd);

//     return () => {
//       router.events.off("routeChangeStart", handleRouteChange);
//       router.events.off("routeChangeComplete", handleTransitionEnd);
//       router.events.off("routeChangeError", handleTransitionEnd);
//     };
//   }, [router.events]);

//   // Step interval to increment until step reaches 4
//   useEffect(() => {
//     setStep(0);
//     const interval = setInterval(() => {
//       setStep((prevStep) => {
//         if (prevStep === 4) {
//           clearInterval(interval); // Stop the interval after reaching step 4
//           return prevStep;
//         }
//         return prevStep + 1; // Move to the next step
//       });
//     }, 1000); // 1-second interval

//     // Clean up the interval when component unmounts
//     return () => clearInterval(interval);
//   }, [router.pathname]);

//   return (
//     <StepContext.Provider value={{ step, setStep }}>
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={router.pathname}
//           initial={{
//             opacity: 0,
//             pointerEvents: "auto",
//           }}
//           animate={{
//             opacity: (() => {
//               if (step === 0) return "1";
//               if (step === 1) return "1";
//               if (step === 2) return "1";
//               if (step === 3) return "0";
//               if (step === 4) return "0";
//             })(),
//             pointerEvents: (() => {
//               if (step === 0) return "auto";
//               if (step === 1) return "auto";
//               if (step === 2) return "auto";
//               if (step === 3) return "none";
//               if (step === 4) return "none";
//             })(),
//           }}
//           className={
//             "fixed w-full h-full left-0 top-0 z-[99] overflow-hidden transition-all duration-300 bg-Mneutral_900 " +
//             (router.pathname === "/" ? "opacity-0 pointer-events-none" : "")
//           }
//         >
//           <motion.img
//             initial={{
//               x: "-50%",
//               y: "-50%",
//               scale: 50,
//               rotate: "-120deg",
//             }}
//             animate={{
//               x: "-50%",
//               y: "-50%",
//               scale: (() => {
//                 if (step === 0) return 1;
//                 if (step === 1) return 1;
//                 if (step === 2) return 50;
//                 if (step === 3) return 50;
//                 if (step === 4) return 50;
//               })(),
//               rotate: (() => {
//                 if (step === 0) return "0deg";
//                 if (step === 1) return "0deg";
//                 if (step === 2) return "-120deg";
//                 if (step === 3) return "-120deg";
//                 if (step === 4) return "-120deg";
//               })(),
//             }}
//             transition={{
//               duration: 0.9,
//               ease: "easeInOut",
//             }}
//             src={originalUrl + "sdasd.svg"}
//             className="absolute left-1/2 top-1/2 z-[3]"
//             alt=""
//           />
//         </motion.div>

//         <motion.div
//           key={router.pathname} // Each page transition is identified by pathname
//           initial={{ opacity: 0 }} // Start with opacity 0
//           animate={{
//             opacity: step >= 3 || router.pathname === "/" ? 1 : 0, // Fade in when step reaches 4 or when on home page
//           }}
//           exit={{ opacity: 0 }} // Fade out when leaving the page
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//         >
//           {children}
//         </motion.div>
//       </AnimatePresence>
//     </StepContext.Provider>
//   );
// };

// // In PageTransitionProvider.js
// // export default PageTransitionProvider;