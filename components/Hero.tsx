"use client";
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleShare = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding padding-x">
        <h1 className="hero__title">TESOURO SELIC 2026</h1>

        <CustomButton
          title="Share"
          containerStyles="bg-primary-green text-white rounded-full mt-10"
          handleClick={handleShare}
        />
      </div>
    </div>
  );
};

export default Hero;
