import axios from "axios";
import { Artist, SpotifyTrack } from "../types/spotify";

export const getTopArtists = async (accessToken: string) => {
  const res = await axios.get("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    });
    return res.data.items as Artist[];
};

export const getTopTracks = async (accessToken: string) => {
    const res = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
        headers: {
        Authorization: `Bearer ${accessToken}`,
        },
    });
    return res.data.items as SpotifyTrack[];
};

export const getTopArtistsByTimeRange = async (accessToken: string, timeRange: string) => {
    const res = await axios.get(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}`, {
        headers: {
        Authorization: `Bearer ${accessToken}`,
        },
    });
    return res.data.items as Artist[];
};

export const getTopTracksByTimeRange = async (accessToken: string, timeRange: string) => {
    const res = await axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}`, {
        headers: {
        Authorization: `Bearer ${accessToken}`,
        },
    });
    return res.data.items as SpotifyTrack[];
};
    

