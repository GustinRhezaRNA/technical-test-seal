import { useQuery } from '@tanstack/react-query';
import { fetchNews } from '../app/api/berita';

export const useNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: () => fetchNews(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
