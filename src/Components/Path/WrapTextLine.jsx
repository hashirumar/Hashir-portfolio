"use client"

import { Fragment, useRef, useEffect, useState, useContext } from "react"
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion"
import { ScrollContext } from "@/Components/hook/SmoothScrollbarProvider" // Import ScrollContext
import useHostname from "../Provider/HostnameProvider"

const ScrollTextReveal = () => {
  const originalUrl = useHostname() + "/images/"

  // Reference to the component container
  const containerRef = useRef(null)

  // Get scroll position from context
  const scrollPosition = useContext(ScrollContext)

  // Create a motion value for scroll progress with spring physics for smoothness
  const scrollProgress = useMotionValue(0)

  // Apply spring physics to the scroll progress for smoother transitions
  const smoothScrollProgress = useSpring(scrollProgress, {
    damping: 30,
    stiffness: 300,
    mass: 0.5,
  })

  // State to store element position
  const [elementPosition, setElementPosition] = useState({ top: 0, height: 0 })

  // Update element position on mount and window resize
  useEffect(() => {
    const updatePosition = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop

        setElementPosition({
          top: rect.top + scrollTop,
          height: rect.height,
        })
      }
    }

    // Initial position
    updatePosition()

    // Update on resize with debounce
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(updatePosition, 100)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      clearTimeout(resizeTimer)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Calculate scroll progress based on scroll position and element position
  useEffect(() => {
    if (elementPosition.height > 0) {
      // Calculate when animation should start and end
      const startPosition = elementPosition.top + elementPosition.height - window.innerHeight // bottom of element enters viewport
      const endPosition = elementPosition.top + elementPosition.height * 0.8 // 80% of element has been scrolled through

      // Calculate progress (0 to 1)
      let progress = 0

      if (scrollPosition <= startPosition) {
        progress = 0
      } else if (scrollPosition >= endPosition) {
        progress = 1
      } else {
        // Use cubic-bezier easing for smoother progress
        const linearProgress = (scrollPosition - startPosition) / (endPosition - startPosition)
        progress = easeInOutCubic(linearProgress)
      }

      // Update motion value
      scrollProgress.set(progress)
    }
  }, [scrollPosition, elementPosition, scrollProgress])

  // Cubic easing function for smoother transitions
  const easeInOutCubic = (x) => {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2
  }

  // Transform scrollProgress (0-1) to steps (0-20) for more precise control
  const step = useTransform(
    smoothScrollProgress,
    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  )

  // Calculate bottom position based on scroll progress with smoother curve
  const bottomPosition = useTransform(step, [0, 4, 8, 12, 16, 20], ["-60%", "-48%", "-36%", "-24%", "-12%", "0%"])

  // Line 1 animation (more distinct steps for each line)
  const line1Opacity = useTransform(step, [0, 1, 3, 20], [0, 0.5, 1, 1])
  const line1MaxWidth = useTransform(step, [0, 1, 3, 20], ["0%", "50%", "100%", "100%"])
  const line1Y = useTransform(step, [0, 1, 3, 20], ["20px", "10px", "0px", "0px"])

  // Line 2 animation - PRECISE CONTROL FOR THIS LINE
  const line2Opacity = useTransform(step, [3, 4, 5, 6, 20], [0, 0.3, 0.6, 1, 1])
  const line2MaxWidth = useTransform(step, [3, 4, 5, 6, 20], ["0%", "33%", "66%", "100%", "100%"])
  const line2Y = useTransform(step, [3, 4, 5, 6, 20], ["20px", "15px", "10px", "0px", "0px"])

  // Line 3 animation
  const line3Opacity = useTransform(step, [6, 7, 8, 9, 20], [0, 0.3, 0.6, 1, 1])
  const line3MaxWidth = useTransform(step, [6, 7, 8, 9, 20], ["0%", "33%", "66%", "100%", "100%"])
  const line3Y = useTransform(step, [6, 7, 8, 9, 20], ["20px", "15px", "10px", "0px", "0px"])

  // Line 4 animation
  const line4Opacity = useTransform(step, [9, 10, 11, 12, 20], [0, 0.3, 0.6, 1, 1])
  const line4MaxWidth = useTransform(step, [9, 10, 11, 12, 20], ["0%", "33%", "66%", "100%", "100%"])
  const line4Y = useTransform(step, [9, 10, 11, 12, 20], ["20px", "15px", "10px", "0px", "0px"])

  // Line 5 animation
  const line5Opacity = useTransform(step, [12, 13, 14, 15, 20], [0, 0.3, 0.6, 1, 1])
  const line5MaxWidth = useTransform(step, [12, 13, 14, 15, 20], ["0%", "33%", "66%", "100%", "100%"])
  const line5Y = useTransform(step, [12, 13, 14, 15, 20], ["20px", "15px", "10px", "0px", "0px"])

  // Line 6 animation
  const line6Opacity = useTransform(step, [15, 16, 17, 18, 20], [0, 0.3, 0.6, 1, 1])
  const line6MaxWidth = useTransform(step, [15, 16, 17, 18, 20], ["0%", "33%", "66%", "100%", "100%"])
  const line6Y = useTransform(step, [15, 16, 17, 18, 20], ["20px", "15px", "10px", "0px", "0px"])

  return (
    <Fragment>
      <div ref={containerRef} className="relative w-full overflow-hidden h-[800px] lg:h-auto will-change-transform">
        <img
          src={originalUrl + "Frame 7.png" || "/placeholder.svg"}
          className="w-full h-full object-cover md:block hidden"
          alt=""
          loading="eager"
        />
        <img
          src={originalUrl + "Background image.png" || "/placeholder.svg"}
          className="w-full h-full object-cover md:hidden"
          alt=""
          loading="eager"
        />

        {/* Background text (faded) */}
        <motion.div
          className="text-[20px] ss:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px] text-white absolute w-full p-4 xs:!p-8 left-0 will-change-transform"
          style={{
            bottom: bottomPosition,
            opacity: 0.1, // More subtle background
          }}
        >
          <h5 className="leading-snug">
            <span className="overflow-hidden inline-block">
              <span className="inline-block w-max">
                Hey there! I'm Jacob <br className="xs:hidden" /> — a photographer,{" "}
                <br className="xs:block hidden lg:hidden" /> visual <br className="xs:hidden" /> storyteller,{" "}
                <br className="lg:block hidden" />
                and lover of <br className="xs:hidden" /> natural light. <br className="xs:block hidden lg:hidden" />{" "}
                What started as <br className="xs:hidden" /> a fascination with
              </span>
            </span>
            <br />
            <span className="overflow-hidden inline-block">
              <span className="inline-block w-max">
                my dad's old film camera <br className="ss:hidden" /> eventually <br className="lg:hidden" />
                evolved into a deep
              </span>
            </span>{" "}
            <br />
            <span className="overflow-hidden inline-block">
              <span className="inline-block w-max">
                passion for capturing life as <br className="lg:hidden" /> it happens — raw, honest, and
              </span>
            </span>{" "}
            <br />
            <span className="overflow-hidden inline-block">
              <span className="inline-block w-max">beautifully unscripted.</span>
            </span>{" "}
          </h5>
          <h5 className="leading-snug mt-6">
            <span className="overflow-hidden inline-block">
              <span className="inline-block w-max">
                Whether I'm shooting a quiet <br className="md:hidden" />
                portrait <br className="md:block hidden lg:hidden" /> in golden-hour light or{" "}
                <br className="md:hidden" />
                <br className="lg:block hidden" />
                running around at a <br className="md:block hidden lg:hidden" /> fast-paced <br className="xs:hidden" />
                event, <br className="xs:block hidden md:hidden" /> I always aim to preserve{" "}
              </span>
            </span>{" "}
            <br />
            <span className="overflow-hidden inline-block">
              <span className="inline-block w-max">
                the essence of the moment <br className="xs:hidden" /> — the kind{" "}
                <br className="xs:block hidden lg:hidden" /> that feels timeless{" "}
                <br className="lg:block xs:hidden xl:hidden" /> when <br className="xl:block hidden" />
                you <br className="xs:block hidden md:hidden" /> look back on it.
              </span>
            </span>{" "}
          </h5>
        </motion.div>

        {/* Foreground text (revealed line by line) */}
        <motion.div
          className="text-[20px] ss:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px] text-white absolute w-full p-4 xs:!p-8 left-0 z-[1] will-change-transform"
          style={{
            bottom: bottomPosition,
          }}
        >
          <h5 className="leading-snug relative">
            {/* Line 1 */}
            <motion.span
              style={{
                maxWidth: line1MaxWidth,
                opacity: line1Opacity,
                y: line1Y,
                willChange: "max-width, opacity, transform",
              }}
              className="overflow-hidden max-w-[100%] inline-block transition-all duration-300"
            >
              <span className="inline-block w-max">
                Hey there! I'm Jacob <br className="xs:hidden" /> — a photographer,{" "}
                <br className="xs:block hidden lg:hidden" /> visual <br className="xs:hidden" /> storyteller,{" "}
                <br className="lg:block hidden" />
                and lover of <br className="xs:hidden" /> natural light. <br className="xs:block hidden lg:hidden" />{" "}
                What started as <br className="xs:hidden" /> a fascination with
              </span>
            </motion.span>
            <br />
            {/* Line 2 - PRECISE CONTROL FOR THIS LINE */}
            <motion.span
              style={{
                maxWidth: line2MaxWidth,
                opacity: line2Opacity,
                y: line2Y,
                willChange: "max-width, opacity, transform",
              }}
              className="overflow-hidden max-w-[100%] inline-block transition-all duration-300"
            >
              <span className="inline-block w-max">
                my dad's old film camera <br className="ss:hidden" /> eventually <br className="lg:hidden" />
                evolved into a deep
              </span>
            </motion.span>{" "}
            <br />
            {/* Line 3 */}
            <motion.span
              style={{
                maxWidth: line3MaxWidth,
                opacity: line3Opacity,
                y: line3Y,
                willChange: "max-width, opacity, transform",
              }}
              className="overflow-hidden max-w-[100%] inline-block transition-all duration-300"
            >
              <span className="inline-block w-max">
                passion for capturing life as <br className="lg:hidden" /> it happens — raw, honest, and
              </span>
            </motion.span>{" "}
            <br />
            {/* Line 4 */}
            <motion.span
              style={{
                maxWidth: line4MaxWidth,
                opacity: line4Opacity,
                y: line4Y,
                willChange: "max-width, opacity, transform",
              }}
              className="overflow-hidden max-w-[100%] inline-block transition-all duration-300"
            >
              <span className="inline-block w-max">beautifully unscripted.</span>
            </motion.span>{" "}
          </h5>

          <h5 className="leading-snug mt-6 relative">
            {/* Line 5 */}
            <motion.span
              style={{
                maxWidth: line5MaxWidth,
                opacity: line5Opacity,
                y: line5Y,
                willChange: "max-width, opacity, transform",
              }}
              className="overflow-hidden max-w-[100%] inline-block transition-all duration-300"
            >
              <span className="inline-block w-max">
                Whether I'm shooting a quiet <br className="md:hidden" />
                portrait <br className="md:block hidden lg:hidden" /> in golden-hour light or{" "}
                <br className="md:hidden" />
                <br className="lg:block hidden" />
                running around at a <br className="md:block hidden lg:hidden" /> fast-paced <br className="xs:hidden" />
                event, <br className="xs:block hidden md:hidden" /> I always aim to preserve{" "}
              </span>
            </motion.span>{" "}
            <br />
            {/* Line 6 */}
            <motion.span
              style={{
                maxWidth: line6MaxWidth,
                opacity: line6Opacity,
                y: line6Y,
                willChange: "max-width, opacity, transform",
              }}
              className="overflow-hidden max-w-[100%] inline-block transition-all duration-300"
            >
              <span className="inline-block w-max">
                the essence of the moment <br className="xs:hidden" /> — the kind{" "}
                <br className="xs:block hidden lg:hidden" /> that feels timeless{" "}
                <br className="lg:block xs:hidden xl:hidden" /> when <br className="xl:block hidden" />
                you <br className="xs:block hidden md:hidden" /> look back on it.
              </span>
            </motion.span>{" "}
          </h5>
        </motion.div>

        {/* Debug overlay - uncomment for testing */}
        {/* <motion.div
          className="absolute top-4 right-4 bg-black/70 text-white p-4 rounded-lg z-10 text-sm"
          style={{ opacity: 1 }}
        >
          <p>Step: {step.get().toFixed(1)}</p>
          <p>Line 2 Opacity: {line2Opacity.get().toFixed(2)}</p>
          <p>Line 2 Width: {line2MaxWidth.get()}</p>
        </motion.div> */}
      </div>
    </Fragment>
  )
}

export default ScrollTextReveal
