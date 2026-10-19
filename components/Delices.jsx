"use client";
import Photo from "./Photo";
import { IMAGES } from "@/data/images";
import { useLang } from "./LangProvider";

// "Nos délices": mosaic of photos taken by guests.
// The grid layout (big first tile, tall tiles...) is in globals.css (.mosaic).
export default function Delices() {
  const { t } = useLang();
  return (
    <section className="info" id="delices">
      <div className="wrap">
        <h2>{t("d_h")}</h2>
        <p className="sub">{t("d_sub")}</p>
        <div className="mosaic">
          {IMAGES.delices.map((src, i) => (
            <Photo key={i} src={src} alt={`${t("d_h")} ${i + 1}`} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
