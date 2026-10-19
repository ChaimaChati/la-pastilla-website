"use client";
import Photo from "./Photo";
import { IMAGES } from "@/data/images";
import { useLang } from "./LangProvider";

// "Notre maison": photos scattered like prints on a table.
export default function Maison() {
  const { t } = useLang();
  return (
    <section>
      <div className="wrap">
        <h2>{t("p_h")}</h2>
        <p className="sub">{t("p_sub")}</p>
        <div className="scatter">
          {IMAGES.maison.map((src, i) => (
            <Photo key={i} src={src} alt={`${t("p_h")} ${i + 1}`} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
