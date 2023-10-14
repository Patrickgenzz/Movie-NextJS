const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getAnimeById = async (id: number) => {
  const response = await fetch(`${BASE_URL}/anime/${id}`);
  const data = await response.json();
  return data.data;
};

const getPopularAnimes = async (limit?: number) => {
  if (limit) {
    const response = await fetch(`${BASE_URL}/top/anime?limit=${limit}`);
    const data = await response.json();
    return data.data;
  }

  const response = await fetch(`${BASE_URL}/top/anime`);
  const data = await response.json();
  return data.data;
};

const getSeasonNowAnimes = async (limit?: number) => {
  if (limit) {
    const response = await fetch(`${BASE_URL}/seasons/now?limit=${limit}`);
    const data = await response.json();
    return data.data;
  }

  const response = await fetch(`${BASE_URL}/seasons/now`);
  const data = await response.json();
  return data.data;
};

const getUpcomingAnimes = async (limit?: number) => {
  if (limit) {
    const response = await fetch(`${BASE_URL}/seasons/upcoming?limit=${limit}`);
    const data = await response.json();
    return data.data;
  }

  const response = await fetch(`${BASE_URL}/seasons/upcoming`);
  const data = await response.json();
  return data.data;
};

const getSearchAnime = async (search: string) => {
  const response = await fetch(`${BASE_URL}/anime?q=${search}`);
  const data = await response.json();
  return data.data;
};

// https://api.jikan.moe/v4/anime?order_by=score&sort=desc&limit=5
export { getPopularAnimes, getAnimeById, getSeasonNowAnimes, getUpcomingAnimes, getSearchAnime };
