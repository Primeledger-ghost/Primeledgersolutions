import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function NewsDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch("/news.json")
      .then((r) => r.json())
      .then((all) => {
        const found = all.find((p) => p.id === slug);
        if (!found) setErr("Article not found");
        setPost(found || null);
      })
      .catch((e) => setErr(String(e)));
  }, [slug]);

  if (err && !post) {
    return (
      <main className="container" style={{ padding: "48px 0" }}>
        <h1>404</h1>
        <p>We couldn't find that article.</p>
        <p>
          <Link to="/#news">← Back to News</Link>
        </p>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="container" style={{ padding: "48px 0" }}>
        <p>Loading…</p>
      </main>
    );
  }

  return (
    <main className="container" style={{ padding: "32px 0", maxWidth: 840 }}>
      <p style={{ opacity: 0.7, marginBottom: 8 }}>
        {new Date(post.date).toLocaleDateString()}
      </p>
      <h1 style={{ marginTop: 0 }}>{post.title}</h1>
      {post.img && (
        <img
          src={post.img}
          alt={post.title}
          style={{ width: "100%", borderRadius: 12, margin: "16px 0 24px" }}
          loading="lazy"
        />
      )}
      {(post.body || []).map((para, i) => (
        <p key={i} style={{ lineHeight: 1.7 }}>
          {para}
        </p>
      ))}

      <p style={{ marginTop: 32 }}>
        <Link to="/#news">← Back to News</Link>
      </p>
    </main>
  );
}
