import React, { useEffect, useRef, useState } from "react";
import s from "./Testimonials.module.css";

const QUOTES = [
  {
    text: "The professionalism and effectiveness of their team in handling my crypto wallet recovery were outstanding. I regained access to my assets.",
    author: "John A",
  },
  {
    text: "They guided me through a clean dispute strategy and handled the bank calls. Funds back in 12 days. Transparent and kind.",
    author: "Amaka O",
  },
  {
    text: "Clear updates, strong evidence pack, and real empathy. This is how recovery should be done.",
    author: "Marco G",
  },
  {
    text: "Absolutely life-saving. My Instagram was hacked and the team recovered it within 48 hours — kept me updated every step of the way. Professional, secure, and trustworthy.",
    author: "Amina Yusuf",
  },
   {
    text: "My Funding was hijacked for weeks and I had almost given up. They recovered it in just a few days and even helped secure my login. Truly grateful",
    author: "Sophia Hernandez",
  },
  {
    text: "I thought my email was gone for good. They guided me through the verification process and got my account back. Clear instructions and great support.",
    author: "David Okoye",
  },
  {
    text: "Fast, polite, and efficient. They didn’t promise miracles — they explained realistic steps and delivered. My account is secure again thanks to them",
    author: "Chloe Martins",
  },
  {
    text: "Excellent service. The recovery specialist handled communications with the platform on my behalf and helped restore access without losing any data.",
    author: "Emeka Nwafor",
  },
  {
    text: "“I lost access to my account due to a phishing scam. This service handled everything smoothly and gave me peace of mind. Couldn’t recommend them more.",
    author: "Elena Petrova",
  },
  {
    text: "I was nervous about scams, but their verification and privacy practices convinced me. Recovered my account and set up stronger protections afterwards.",
    author: "Sara Bello",
  },
  {
    text: "Saved me from a nightmare. 24/7 response, clearly documented process, and a successful recovery. Highly recommend to anyone who’s been hacked.",
    author: "Michael Adeyemi",
  },
  {
    text: "“From first contact to full recovery the team was supportive and professional. They explained what happened and how to prevent it next time",
    author: "Fatima Sule",
  },
  {
    text: "Transparent pricing and real results. They recovered an old business account that other services had given up on — I’m impressed.",
    author: "Josephine A.",
  },
  {
    text: "Quick, knowledgeable, and respectful. They walked me through account hardening after recovery so it wouldn’t happen again. Excellent experience.",
    author: "Kunle Johnson",
  },
 
  {
    text: "Excellent communication and quick recovery. I was back in control of my account faster than I expected. Highly professional service",
    author: "Liam Carter",
  },
  
];

export default function Testimonials({ items = QUOTES, interval = 6000 }) {
  const [i, setI] = useState(0);
  const timer = useRef(null);
  const wrapRef = useRef(null);

  const next = () => setI((v) => (v + 1) % items.length);
  const prev = () => setI((v) => (v - 1 + items.length) % items.length);

  useEffect(() => {
    start();
    return stop;
  }, [i, items.length]);

  const start = () => {
    stop();
    timer.current = setInterval(next, interval);
  };
  const stop = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  };

  // Basic swipe for mobile
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let x0 = null;
    const onStart = (e) => (x0 = (e.touches?.[0] || e).clientX);
    const onMove = (e) => {
      if (x0 === null) return;
      const x1 = (e.touches?.[0] || e).clientX;
      const dx = x1 - x0;
      if (Math.abs(dx) > 60) {
        dx > 0 ? prev() : next();
        x0 = null;
      }
    };
    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
    };
  }, []);

  const q = items[i];

  return (
    <section
      className={s.wrap}
      id="testimonials"
      aria-labelledby="tst-title"
      onMouseEnter={stop}
      onMouseLeave={start}
      ref={wrapRef}
    >
      <div className="container">
        <header className={s.header}>
          <span className={s.quotes} aria-hidden>
            ❝❞
          </span>
          <h2 className={s.h2} id="tst-title">
            Our Clients <span className={s.gold}>Experiences</span>
          </h2>
        </header>

        <figure className={s.card}>
          <blockquote className={s.text}>&ldquo;{q.text}&rdquo;</blockquote>
          <figcaption className={s.author}>— {q.author}</figcaption>
        </figure>

        <nav className={s.pager} aria-label="Testimonial navigation">
          <button className={s.nav} onClick={prev} aria-label="Previous">
            ‹
          </button>
          <div className={s.dots}>
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`${s.dot} ${idx === i ? s.on : ""}`}
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          <button className={s.nav} onClick={next} aria-label="Next">
            ›
          </button>
        </nav>
      </div>
      <div className={s.aura} aria-hidden />
    </section>
  );
}
