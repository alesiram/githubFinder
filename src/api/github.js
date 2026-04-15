export const fetchGitHubUser = async (username) => {
  const res = await fetch(
    `/api/github-user?username=${encodeURIComponent(username)}`
  );

  const text = await res.text();

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`Expected JSON but got: ${text.slice(0, 80)}`);
  }

  if (!res.ok) {
    throw new Error(data?.message || "Failed to fetch user");
  }

  return data;
};

export const searchGitHubUsers = async (query) => {
  if (!query) return [];

  const res = await fetch(`/api/github-search?q=${encodeURIComponent(query)}`);

  const text = await res.text();

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`Expected JSON but got: ${text.slice(0, 80)}`);
  }

  if (!res.ok) {
    throw new Error(data?.message || "Failed to search users");
  }

  return data;
};