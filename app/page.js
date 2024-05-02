"use client";
import React from "react";
import Hero from "./components/Hero.jsx";
import Service from "./components/Service.jsx";
import Vission from "./components/Vission.jsx";
import CallToAction from "./components/CallToAction.jsx";
import Footer from "./Footer.jsx";
import NavbarMain from "./components/NavbarMain.jsx";


export default function page() {
  return (
    <main>
      <NavbarMain />
      <div
        className="">
        <Hero />
      </div>
      <div>
        <Service />
      </div>
      <div className="bg-content2">
        <Vission />
      </div>
      <div>
        <CallToAction />
        <video
          id="videoElement"
          width="100%"
          height="10%"
          loop
          muted
          autoPlay
          playsInline
          preload="metadata"
          poster=""
        >
          <source src="/logit.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}