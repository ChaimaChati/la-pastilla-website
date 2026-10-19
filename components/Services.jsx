"use client";
import Photo from "./Photo";
import { IMAGES } from "@/data/images";
import { useLang } from "./LangProvider";

const ITEMS = ["f1", "f2", "f3"];

export default function Services() {
  const { t } = useLang();
  return (
    <section>
      <div className="wrap">
        <h2>{t("s_h")}</h2>
        <p className="sub">{t("s_sub")}</p>
        <div className="three">
          {ITEMS.map((key, i) => (
            <div className="card" key={key}>
              <Photo src={IMAGES.serve[i]} alt={t(key)} index={i} />
              <div className="t">
                <h3>{t(key)}</h3>
                <p>{t(key + "d")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
