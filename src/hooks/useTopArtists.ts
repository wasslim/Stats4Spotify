import { useState, useEffect } from "react";
import { getTopArtists } from "../services/spotifyService";
import { Artist } from "@/types/spotify";

const useTopArtists = (accessToken: string | undefined) => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!accessToken) return;

    const fetchArtists = async () => {
      try {
        const data = await getTopArtists(accessToken);
        setArtists(data);
      } catch  {
        setError("Failed to fetch top artists.");
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, [accessToken]);

  return { artists, loading, error };
};

export default useTopArtists;


