"use client"

import { useContext } from "react"

import { useEffect, useRef, createContext, useState, useCallback } from "react"
import Scrollbar from "smooth-scrollbar"

// Create a context for the scroll position and scrollbar instance
export const ScrollContext = createContext(0)
export const ScrollbarInstanceContext = createContext(null)

export default function SmoothScrollbarProvider({ children }) {
  const scrollRef = useRef(null)
  const scrollbarRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Use RAF for smoother updates instead of setTimeout
  const rafRef = useRef(null)

  useEffect(() => {
    if (!scrollRef.current) return

    // Enhanced options for smoother scrolling
    const options = {
      damping: 0.1, // Slightly increased for smoother feel (0.07 → 0.1)
      thumbMinSize: 20,
      renderByPixels: true, // Enable pixel-by-pixel rendering
      alwaysShowTracks: false,
      continuousScrolling: true,
      plugins: {
        // Add overscroll effect for a more natural feel at boundaries
        overscroll: {
          effect: "bounce",
          damping: 0.15,
          maxOverscroll: 150,
        },
      },
    }

    // Initialize plugins if they exist
    if (Scrollbar.use) {
      // Check if the OverscrollPlugin is available
      try {
        const { OverscrollPlugin } = require("smooth-scrollbar/plugins/overscroll")
        Scrollbar.use(OverscrollPlugin)
      } catch (e) {
        console.log("OverscrollPlugin not available, continuing without it")
      }
    }

    // Initialize scrollbar with enhanced options
    const scrollbar = Scrollbar.init(scrollRef.current, options)
    scrollbarRef.current = scrollbar

    // More efficient scroll handler using requestAnimationFrame
    const handleScroll = () => {
      const offsetY = scrollbar.offset.y
      setScrollPosition(offsetY)

      // Continue the animation loop
      rafRef.current = requestAnimationFrame(handleScroll)
    }

    // Start the animation loop
    rafRef.current = requestAnimationFrame(handleScroll)

    // Add a more responsive scroll listener for immediate feedback
    scrollbar.addListener(({ offset }) => {
      // This will be called on every scroll event
      // We don't need to update state here as RAF is already doing that
      // But we can use this for other immediate reactions if needed
    })

    // Cleanup function
    return () => {
      // Cancel any pending animation frames
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      // Destroy the scrollbar instance
      if (scrollbar) {
        scrollbar.destroy()
      }
    }
  }, [])

  // Expose methods to control the scrollbar
  const scrollTo = useCallback((options) => {
    if (scrollbarRef.current) {
      scrollbarRef.current.scrollTo(options)
    }
  }, [])

  const scrollIntoView = useCallback((element, options) => {
    if (scrollbarRef.current) {
      scrollbarRef.current.scrollIntoView(element, options)
    }
  }, [])

  const updateScrollbar = useCallback(() => {
    if (scrollbarRef.current) {
      scrollbarRef.current.update()
    }
  }, [])

  // Combined context value with position and methods
  const contextValue = {
    position: scrollPosition,
    scrollTo,
    scrollIntoView,
    updateScrollbar,
    scrollbar: scrollbarRef.current,
  }

  return (
    <ScrollbarInstanceContext.Provider value={contextValue}>
      <ScrollContext.Provider value={scrollPosition}>
        <div
          ref={scrollRef}
          style={{
            height: "100vh",
            overflow: "hidden",
            willChange: "transform", // Performance hint for smoother animations
          }}
          className="smooth-scrollbar"
        >
          {children}
        </div>
      </ScrollContext.Provider>
    </ScrollbarInstanceContext.Provider>
  )
}

// Helper hook to access the scrollbar instance and methods
export function useScrollbar() {
  return useContext(ScrollbarInstanceContext)
}
