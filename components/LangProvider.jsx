"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { TEXT } from "@/data/text";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("fr");

  // Pick English for visitors whose browser isn't French.
  useEffect(() => {
    if (!navigator.language.startsWith("fr")) setLang("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => TEXT[lang][key];
  const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"));

  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
