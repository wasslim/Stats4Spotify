import { useState, useEffect } from "react";
import { getTopArtistsByTimeRange } from "../services/spotifyService";
import { Artist } from "@/types/spotify";

const useTopArtistsByTimeRange = (accessToken: string | undefined, timeRange: string) => {
    const [artists, setArtists] = useState<Artist[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        if (!accessToken) return;
    
        const fetchArtists = async () => {
        try {
            const data = await getTopArtistsByTimeRange(accessToken, timeRange);
            setArtists(data);
        } catch  {
            setError("Failed to fetch top artists.");
        } finally {
            setLoading(false);
        }
        };
    
        fetchArtists();
    }, [accessToken, timeRange]);
    
    return { artists, loading, error };
    };
    
    export default useTopArtistsByTimeRange;
