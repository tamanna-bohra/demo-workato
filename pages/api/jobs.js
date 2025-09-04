// pages/api/jobs.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch("https://apim.workato.com/bpod/job-postings-v0/jobs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "api-token": process.env.WORKATO_API_TOKEN, // stored securely in Vercel
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch jobs", details: err.message });
  }
}
