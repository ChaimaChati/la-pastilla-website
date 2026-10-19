"use client";
import { PLACEHOLDER } from "@/data/images";
import { useOpenPhoto } from "./PhotoProvider";

// One photo tile. Click to open full screen.
// `index` only varies the tint of the placeholder so the layout looks lively.
export default function Photo({ src, alt, index = 0, eager = false }) {
  const open = useOpenPhoto();
  return (
    <button
      type="button"
      className={`pic ph-${(index % 4) + 1}`}
      aria-label={alt}
      onClick={() => open(src)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={src === PLACEHOLDER ? "ph" : undefined}
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
      />
    </button>
  );
}
