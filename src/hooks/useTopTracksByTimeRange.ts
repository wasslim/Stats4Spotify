import {useState, useEffect} from "react";
import {getTopTracksByTimeRange} from "../services/spotifyService";
import {SpotifyTrack} from "@/types/spotify";

const useTopTracksByTimeRange = (accessToken: string | undefined, timeRange: string) => {
    const [tracks, setTracks] = useState<SpotifyTrack[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!accessToken) return;

        const fetchTracks = async () => {
            try {
                const data = await getTopTracksByTimeRange(accessToken, timeRange);
                setTracks(data);
            } catch {
                setError("Failed to fetch top tracks.");
            } finally {
                setLoading(false);
            }
        };

        fetchTracks();
    }, [accessToken, timeRange]);

    return {tracks, loading, error};
};

export default useTopTracksByTimeRange;