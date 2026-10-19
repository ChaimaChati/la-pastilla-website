"use client";
import { SITE } from "@/data/site";
import { useLang } from "./LangProvider";

export default function Visit() {
  const { t } = useLang();
  return (
    <section className="info" id="visit">
      <div className="wrap grid">
        <div>
          <h2>{t("v_h")}</h2>
          <p>
            {SITE.address[0]}
            <br />
            {SITE.address[1]}
          </p>
          <p><a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a></p>
          <p>{t("hours")}</p>
          <p>
            <a className="btn teal" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
              {t("maps")}
            </a>
          </p>
        </div>
        <div className="side">
          <iframe
            title={`${SITE.name} – map`}
            src={SITE.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}