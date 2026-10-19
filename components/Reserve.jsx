"use client";
import { useEffect, useState } from "react";
import { SITE } from "@/data/site";
import { useLang } from "./LangProvider";

// No backend: the form opens WhatsApp with the booking already written.
export default function Reserve() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", date: "", time: "13:00", guests: "2" });
  const [today, setToday] = useState("");

  useEffect(() => setToday(new Date().toISOString().slice(0, 10)), []);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const message = t("wa")
      .replace("{n}", form.name)
      .replace("{d}", form.date)
      .replace("{t}", form.time)
      .replace("{g}", form.guests);
    window.open(
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener"
    );
  };

  return (
    <section id="reserve">
      <div className="wrap narrow">
        <h2>{t("r_h")}</h2>
        <p className="sub">{t("r_sub")}</p>
        <form onSubmit={submit}>
          <label>
            <span>{t("l_name")}</span>
            <input required autoComplete="name" value={form.name} onChange={set("name")} />
          </label>
          <div className="row">
            <label>
              <span>{t("l_date")}</span>
              <input type="date" required min={today} value={form.date} onChange={set("date")} />
            </label>
            <label>
              <span>{t("l_time")}</span>
              <input type="time" required value={form.time} onChange={set("time")} />
            </label>
          </div>
          <label>
            <span>{t("l_guests")}</span>
            <select value={form.guests} onChange={set("guests")}>
              {["2", "3", "4", "5", "6", "7+"].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </label>
          <button className="btn main" type="submit">{t("send")}</button>
        </form>
      </div>
    </section>
  );
}
