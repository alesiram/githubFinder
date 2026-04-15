export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ message: "Search query is required" });
  }

  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${encodeURIComponent(q)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        message: data.message || "Failed to search users",
      });
    }

    return res.status(200).json(data.items || []);
  } catch (error) {
    return res.status(500).json({
      message: "Server error while searching GitHub users",
    });
  }
}
