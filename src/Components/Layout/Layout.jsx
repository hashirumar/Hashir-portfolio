import React, { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import useHostname from "../Provider/HostnameProvider";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import Navbar from "../Nav/Navbar";
import Footer from "../Nav/Footer";
import SmoothScrollbarProvider from "../hook/SmoothScrollbarProvider";
import { useRouter } from "next/router";
import LoadingHome from "../Path/LoadingHome";

const Layout = ({
  children,
  title = "✱ JACOB",
  description = "✱ JACOB Desc",
  navbar = true,
  footer = true,
  useHeight = false,
  step = 0,
}) => {
  const originalUrl = useHostname();
  const router = useRouter();
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className={
          "w-full overflow-hidden relative " +
          (useHeight ? "h-screen" : "min-h-screen")
        }
      >
        {navbar ? <Navbar step={step} /> : ""}  

        {router.pathname === "/" ? <LoadingHome step={step} /> : ""}

        <SmoothScrollbarProvider>
          <div className="w-full overflow-hidden mt-[64px] lg:mt-[80px]">{children}</div>

          {footer ? <Footer /> : ""}
        </SmoothScrollbarProvider>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>
    </Fragment>
  );
};

export default Layout;
