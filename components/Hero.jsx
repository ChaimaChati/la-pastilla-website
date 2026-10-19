"use client";
import Photo from "./Photo";
import { IMAGES } from "@/data/images";
import { SITE } from "@/data/site";
import { useLang } from "./LangProvider";

export default function Hero() {
  const { t, lang, toggle } = useLang();
  return (
    <header className="hero">
      <div className="hero-grid">
        {IMAGES.hero.map((src, i) => (
          <Photo key={i} src={src} alt={`${SITE.name} ${i + 1}`} index={i} eager />
        ))}
      </div>
      <div className="wrap">
        <nav>
          <a href="#delices">{t("n_delices")}</a>
          <a href="#visit">{t("n_visit")}</a>
          <a href="#reserve">{t("n_res")}</a>
          <button
            type="button"
            onClick={toggle}
            aria-label="Changer de langue / Change language"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </nav>
        <div className="center">
          <h1>{SITE.name}</h1>
          <p>{t("tag")}</p>
          <div className="btns">
            <a className="btn main" href="#delices">{t("b_delices")}</a>
            <a className="btn ghost" href="#reserve">{t("b_res")}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
