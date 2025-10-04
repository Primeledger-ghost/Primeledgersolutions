import React from "react";
import { Link } from "react-router-dom";
import OurServices from "../OurServices/OurServices";
import s from "./ServicesSocial.module.css";

export default function ServicesSocial() {
  return (
    <main className={s.page}>
      {/* HERO */}
      <section className={s.hero} aria-labelledby="sm-hero-title">
        <div className="container">
          <div className={s.heroInner}>
            <div className={s.heroText}>
              <p className={s.kicker}>SOCIAL MEDIA SCAM RECOVERY</p>
              <h1 id="sm-hero-title" className={s.h1}>
                Caught in the web of a{" "}
                <span className={s.accent}>Social Media Scam</span>?
              </h1>
              <p className={s.lede}>
                We rebuild the timeline, trace payments, and push formal actions
                with platforms, banks, and exchanges—so you have a real path
                back to your funds.
              </p>
              <div className={s.ctaRow}>
                <Link className={s.cta} to="/#start">
                  Book Free Consultation
                </Link>
                <a className={s.altCta} href="/#process">
                  See How It Works
                </a>
              </div>
            </div>

            <figure className={s.heroArt} aria-hidden>
              {/* Replace with your illustration image */}
              <div className={s.illus}>
                <div className={s.dotA} />
                <div className={s.dotB} />
                <div className={s.dotC} />
                <span className={s.emoji}>🛡️</span>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* SPECIALIZATION */}
      <section className={s.section} aria-labelledby="spec-title">
        <div className="container">
          <h2 id="spec-title" className={s.h2}>
            Our Social Media Scam Recovery{" "}
            <span className={s.accent}>Specialization</span>
          </h2>
          <div className={s.specGrid}>
            <article className={s.card}>
              <h3 className={s.h3}>Evidence That Moves Teams</h3>
              <p>
                We convert chats, DMs, screenshots, and receipts into a
                structured brief that meets the standards of platforms, banks,
                and exchanges.
              </p>
            </article>
            <article className={s.card}>
              <h3 className={s.h3}>Cross-Platform & Cross-Border</h3>
              <p>
                We track funds across card rails, P2P apps, exchanges, and
                offshore processors, aligning jurisdiction, policy, and timing
                windows.
              </p>
            </article>
            <article className={s.card}>
              <h3 className={s.h3}>Privacy-First, Client-Safe</h3>
              <p>
                Your story stays protected. We share the minimum necessary while
                maintaining enough proof for decisive action.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FRAUD TYPES */}
      <section className={s.sectionAlt} aria-labelledby="fraud-title">
        <div className="container">
          <h2 id="fraud-title" className={s.h2}>
            Detect Trending{" "}
            <span className={s.accent}>Social Media Frauds</span>
          </h2>
          <div className={s.fraudGrid}>
            {[
              {
                t: "Facebook Scam",
                d: "Marketplace overpayment, ‘verified’ seller spoofing, investment DMs, hacked-friend requests.",
              },
              {
                t: "Instagram Scam",
                d: "Fake brands, crypto flips, influencer imposters, “giveaway” phishing funnels.",
              },
              {
                t: "WhatsApp Scam",
                d: "Romance setups, investment grooming, parcel-delivery phishing, impersonation of officials.",
              },
              {
                t: "Phishing Scam",
                d: "Login pages cloned from real platforms; MFA-bypass tricks and session-steal malware.",
              },
              {
                t: "Tax/Refund Scam",
                d: "Urgent payment claims, ‘settlement’ QR codes, and fake support numbers in bios/DMs.",
              },
              {
                t: "Investment Scam",
                d: "‘Guaranteed returns’, expert signal groups, and fake profit dashboards to lure top-ups.",
              },
            ].map((it, i) => (
              <article key={i} className={s.fraudCard}>
                <h3 className={s.h4}>{it.t}</h3>
                <p>{it.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={s.section} aria-labelledby="proc-title">
        <div className="container">
          <h2 id="proc-title" className={s.h2}>
            Social Media Scam Recovery <span className={s.accent}>Process</span>
          </h2>
          <ol className={s.steps}>
            <li className={s.step}>
              {/* <div className={s.stepBadge}>1</div> */}
              <h3 className={s.h3}>Free Scam Assessment</h3>
              <p>
                We review your situation and confirm the fastest, safest
                recovery path. No obligation.
              </p>
            </li>
            <li className={s.step}>
              {/* <div className={s.stepBadge}>2</div> */}
              <h3 className={s.h3}>Evidence & Timeline Build</h3>
              <p>
                We transform chats, transfers, and calls into a narrative
                aligned with platform and bank policies.
              </p>
            </li>
            <li className={s.step}>
              {/* <div className={s.stepBadge}>3</div> */}
              <h3 className={s.h3}>Filings & Escalation</h3>
              <p>
                We submit targeted requests: platform reports, chargebacks,
                exchange KYC flags, and LE referrals.
              </p>
            </li>
            <li className={s.step}>
              {/* <div className={s.stepBadge}>4</div> */}
              <h3 className={s.h3}>Fund Tracing & Recovery</h3>
              <p>
                We pursue holds, reversals, and account seizures where
                applicable—then follow through to resolution.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={s.sectionAlt} aria-labelledby="how-title">
        <div className="container">
          <h2 id="how-title" className={s.h2}>
            How Social Media <span className={s.accent}>Frauds Work</span>
          </h2>
          <div className={s.twocol}>
            <p>
              Scammers mix social proof (fake likes/follows), urgency, and
              partial truths to create compliance-sounding stories. They move
              victims off-platform quickly and fragment payments across cards,
              P2P, and crypto.
            </p>
            <p>
              Our job is to reassemble the flow, prove misrepresentation, and
              trigger the actions that matter for recovery.
            </p>
          </div>
        </div>
      </section>

      {/* WARNING SIGNS */}
      <section className={s.section} aria-labelledby="signs-title">
        <div className="container">
          <h2 id="signs-title" className={s.h2}>
            Signs You’re Caught Up In A{" "}
            <span className={s.accent}>Social Media Scam</span>
          </h2>
          <div className={s.signs}>
            {[
              "Requests from ‘friends’ who changed numbers or profiles.",
              "Unverifiable online partner pushing investments or urgent transfers.",
              "Poor engagement history; brand posts with stock images only.",
              "Pressure to switch to WhatsApp/Telegram and keep ‘private’.",
              "Asking for gift cards, crypto, or wire with strict ‘reference’ notes.",
              "Threats of account holds or legal action if you don’t pay now.",
            ].map((txt, i) => (
              <div key={i} className={s.sign}>
                <span className={s.bullet} aria-hidden>
                  •
                </span>
                <p>{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={s.ctaSection} aria-labelledby="cta-title">
        <div className="container">
          <h2 id="cta-title" className={s.h2Alt}>
            Take The Road To Social Media Scam Recovery
          </h2>
          <p className={s.ctaSub}>
            Get a fast, confidential assessment. If there’s a viable route—we’ll
            show it to you plainly.
          </p>
          <Link className={s.ctaBig} to="/#start">
            Get Recovery Expertise
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className={s.section} aria-labelledby="faq-title">
        <div className="container">
          <h2 id="faq-title" className={s.h2}>
            FAQ’s About <span className={s.accent}>Social Media Scam</span>
          </h2>
          <div className={s.faqs}>
            {FAQS.map((f, i) => (
              <details key={i} className={s.faq}>
                <summary className={s.faqQ}>{f.q}</summary>
                <div className={s.faqA}>
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <OurServices/>
    </main>
  );
}

const FAQS = [
  {
    q: "Is it possible to recover money from a social media scam?",
    a: "Often, yes. Success depends on timing, payment method, and evidence quality. We rapidly file with banks, platforms, and exchanges to preserve windows and reverse flows where possible.",
  },
  {
    q: "What can you do to recover from a social media scam?",
    a: "We build a proof-ready narrative, submit chargebacks or recalls, flag exchange wallets, and escalate with formal notices and law-enforcement referrals when warranted.",
  },
  {
    q: "How can I get my life on track after being scammed?",
    a: "We help you document the incident for institutions, lock down accounts, and establish a safe communication plan. We also outline what to ignore so scammers can’t re-engage.",
  },
  {
    q: "How do social media scams affect my life?",
    a: "Aside from the financial hit, victims face stress, shame, and trust erosion. We separate fact from fear, and work a practical recovery plan you can follow.",
  },
];
