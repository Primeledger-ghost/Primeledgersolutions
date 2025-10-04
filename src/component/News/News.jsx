// src/component/News/News.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import s from "./News.module.css";

// You can drop DEMO once you're loading JSON. Keeping as fallback for now.
const DEMO = [/* ...your current DEMO array... */];

export default function News({
  posts: incoming = DEMO,
  pageSize = 2,
  title = "Latest News",
}) {
  const [posts, setPosts] = useState(incoming || []);
  const [page, setPage] = useState(0);

  // If caller didn't pass posts (or passed an empty array), fetch news.json
  useEffect(() => {
    const needFetch = !incoming || incoming.length === 0 || incoming === DEMO;
    if (!needFetch) { setPosts(incoming); return; }

    fetch("/news.json")
      .then((r) => r.json())
      .then((data) => {
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(data);
      })
      .catch(() => setPosts(incoming || []));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [incoming]);

  const pages = Math.max(1, Math.ceil(posts.length / pageSize));
  const slice = useMemo(
    () => posts.slice(page * pageSize, page * pageSize + pageSize),
    [posts, page, pageSize]
  );

  return (
    <section className={s.wrap} id="news" aria-labelledby="news-title">
      <div className="container">
        <div className={s.header}>
          <span className={s.emoji} aria-hidden>📰</span>
          <h2 className={s.h2} id="news-title">{title}</h2>
        </div>

        <div className={s.grid}>
          {slice.map((p) => (
            <article key={p.id} className={s.card}>
              <Link className={s.media} to={`/news/${p.id}`} aria-label={p.title}>
                <img className={s.img} src={p.img} alt={p.title} loading="lazy" />
                <div className={s.tag}>
                  {new Date(p.date).toLocaleDateString()}
                </div>
              </Link>
              <div className={s.body}>
                <h3 className={s.title}>
                  <Link to={`/news/${p.id}`}>{p.title}</Link>
                </h3>
                <p className={s.excerpt}>{p.excerpt}</p>
                <Link className={s.more} to={`/news/${p.id}`}>
                  Read More »
                </Link>
              </div>
            </article>
          ))}
        </div>

        {pages > 1 && (
          <div className={s.pager} role="navigation" aria-label="News pagination">
            <button
              className={s.nav}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
            >
              ‹ Prev
            </button>
            <div className={s.dots}>
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  className={`${s.dot} ${i === page ? s.on : ""}`}
                  aria-label={`Page ${i + 1}`}
                  onClick={() => setPage(i)}
                />
              ))}
            </div>
            <button
              className={s.nav}
              onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
              disabled={page === pages - 1}
            >
              Next ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
