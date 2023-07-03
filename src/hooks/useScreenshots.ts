import { useQuery } from '@tanstack/react-query';
import { Screenshots } from '../entities/Screenshot';
import APIClient from '../services/api-client';

interface Props {
  gameId: number;
}

const useScreenshots = ({ gameId }: Props) => {
  const apiClient = new APIClient<Screenshots>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ['screenshots'],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
