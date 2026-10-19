"use client";
import { createContext, useContext, useEffect, useState } from "react";

const PhotoContext = createContext(() => {});

// Wraps the site. Any <Photo> can open a photo full screen.
export function PhotoProvider({ children }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSrc(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <PhotoContext.Provider value={setSrc}>
      {children}
      {src && (
        <div
          className="lb"
          onClick={(e) => e.target === e.currentTarget && setSrc(null)}
        >
          <button type="button" aria-label="Close" onClick={() => setSrc(null)}>
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" />
        </div>
      )}
    </PhotoContext.Provider>
  );
}

export const useOpenPhoto = () => useContext(PhotoContext);
