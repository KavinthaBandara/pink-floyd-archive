"use client";

import React, { useState } from "react";

export default function AdminAlbumsPage() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/albums", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, artist, releaseDate, coverUrl }),
      });
      if (!res.ok) throw new Error((await res.text()) || "Request failed");
      setTitle("");
      setArtist("");
      setReleaseDate("");
      setCoverUrl("");
      setMessage("Album added successfully.");
    } catch (err: any) {
      setMessage(err?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: 20, maxWidth: 700 }}>


      <h1>Admin — Add Album</h1>


      <form onSubmit={handleSubmit}>



        <div style={{ marginBottom: 12 }}>
          <label>Title<br />
            <input value={title} onChange={(e) => setTitle(e.target.value)} required />
          </label>
        </div>



        <div style={{ marginBottom: 12 }}>
          <label>Artist<br />
            <input value={artist} onChange={(e) => setArtist(e.target.value)} required />
          </label>
        </div>



        <div style={{ marginBottom: 12 }}>
          <label>Release Date<br />
            <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
          </label>
        </div>




        <div style={{ marginBottom: 12 }}>
          <label>Cover Image URL<br />
            <input value={coverUrl} onChange={(e) => setCoverUrl(e.target.value)} />
          </label>
        </div>



        <div>
          <button type="submit" disabled={loading}>{loading ? "Adding..." : "Add Album"}</button>
        </div>



      </form>
      {message && <p style={{ marginTop: 12 }}>{message}</p>}



    </main>
  );
}   
