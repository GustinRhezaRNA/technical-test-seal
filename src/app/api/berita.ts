export const fetchNews = async () => {
  const res = await fetch('https://api-berita-indonesia.vercel.app/cnn/nasional/');

  if (!res.ok) {
    throw new Error('Gagal mengambil data berita');
  }

  const data = await res.json();
  return data.data.posts;
};
