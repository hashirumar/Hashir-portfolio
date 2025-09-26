import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import useHostname from "../Provider/HostnameProvider";
import { Container } from "react-bootstrap";
import ItemCard from "./ItemCard";

const WrapHowItWork = () => {
  const items = [
    {
      title: "Let’s Talk.",
      desc: `<p class="text__24 opacity-80">
            We start with a quick chat — either via email, phone, or
            coffee (your call). We’ll discuss your needs, the kind of
            shoot you’re looking for, and what success looks like for
            your project.
          </p>
          <p class="text__24 opacity-80 mt-4">
            No pressure. Just a friendly conversation to see if we’re
            a good fit.
          </p>`,
      link: "/contact",
    },
    {
      title: "Concept & Planning.",
      desc: `
      <p class="text__24 opacity-80">
     Once we align, I’ll help shape the vision — from creative direction, moodboards, to choosing the perfect location or styling team if needed.
          </p>
      <p class="text__24 opacity-80 mt-4">
          Includes:
          </p>
          <div class="grid grid-cols-1">
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Shot list planning</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Timeline and deliverables</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Custom quote & agreement</p>
            </div>
          </div>`,
      link: "/contact",
    },
    {
      title: "Shoot Day.",
      desc: `
        <p class="text__24 opacity-80">
   Once we align, I’ll help shape the vision — from creative direction, moodboards, to choosing the perfect location or styling team if needed.
          </p>
      <p class="text__24 opacity-80 mt-4">
          Includes:
          </p>
          <div class="grid grid-cols-1">
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Shot list planning</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Timeline and deliverables</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Custom quote & agreement</p>
            </div>
          </div>`,
      link: "/contact",
    },
    {
      title: "Post-Production.",
      desc: `
        <p class="text__24 opacity-80">
 After the shoot, I go into editing mode — selecting the best shots, retouching with care, and staying true to the story we captured.
          </p>
      <p class="text__24 opacity-80 mt-4">
          Includes:
          </p>
          <div class="grid grid-cols-1">
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Color correction</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Light retouching (skin, dust, minor adjustments)</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Web and high-res formats for delivery</p>
            </div>
          </div>`,
      link: "/contact",
    },
    {
      title: "Delivery & Payment.",
      desc: `
        <p class="text__24 opacity-80">
You’ll receive a private gallery link to download your images — clean, sharp, and ready to use.
Final payment is due upon delivery.
          </p>
      <p class="text__24 opacity-80 mt-4">
         Payment Options:
          </p>
          <div class="grid grid-cols-1">
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Bank transfer</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">PayPal / Wise</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">50% upfront / 50% on delivery (for most projects)</p>
            </div>
          </div>`,
      link: "/contact",
    },
  ];

  return (
    <section>
      <Container>
        <h5 className="text__24 opacity-40 mb-[48px] md:mb-[68px] lg:mb-[140px]">
          HOW IT WORKS
        </h5>
      </Container>
      <div>
        {items.map((obj, idx) => (
          <ItemCard key={idx} idx={idx} obj={obj} />
        ))}
      </div>
    </section>
  );
};

export default WrapHowItWork;
