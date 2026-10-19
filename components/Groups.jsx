"use client";
import { SITE } from "@/data/site";
import { useLang } from "./LangProvider";

export default function Groups() {
  const { t } = useLang();
  return (
    <section className="groups">
      <div className="wrap">
        <div className="groups-card">
          <h2>{t("g_h")}</h2>
          <p>{t("g_p")}</p>
          <a className="btn main" href={`tel:${SITE.groupsHref}`}>
            {SITE.groupsPhone}
          </a>
        </div>
      </div>
    </section>
  );
}