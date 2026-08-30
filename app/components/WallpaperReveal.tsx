"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

type WallpaperRevealProps = {
  src: string;
  alt: string;
  imageClassName?: string;
  wrapperClassName?: string;
  sizes?: string;
};

// Grows open from a point at the center, mirroring the wallpaper-switch
// transition ("grow") from swww/Hyprland setups, instead of the image just
// popping in. clipPath's percentage radius reaches a rectangle's corners at
// exactly 100/sqrt(2) ≈ 70.7%, regardless of aspect ratio, so 75% clears it
// with a small margin.
//
// The reveal only starts once the image has actually finished loading.
// Starting it on mount instead would grow an empty hole that snaps to the
// image mid-animation on anything slower than an instant cache hit.
export function WallpaperReveal({
  src,
  alt,
  imageClassName,
  wrapperClassName = "absolute inset-0",
  sizes = "100vw",
}: WallpaperRevealProps) {
  const reduceMotion = useReducedMotion();
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      key={src}
      className={wrapperClassName}
      initial={reduceMotion ? false : { clipPath: "circle(0% at 50% 50%)" }}
      animate={
        reduceMotion || !loaded
          ? undefined
          : { clipPath: "circle(75% at 50% 50%)" }
      }
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        className={imageClassName}
      />
    </motion.div>
  );
}
