"use client";
import { useLang } from "./LangProvider";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer>
      <span>{t("foot")}</span>
    </footer>
  );
}
