export interface SpotifyImage {
  url: string;
}
  
export interface SpotifyArtist {
  id: string;
  name: string;
  images: SpotifyImage[];
}
  
export interface SpotifyAlbum {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: { url: string; height: number; width: number }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
  artists: { name: string; href: string; id: string }[];
}

export interface SpotifyTrack {
  id: string;
  name: string;
  album: SpotifyAlbum;
  artists: { name: string; href: string; id: string }[];
  duration_ms: number;
  explicit: boolean;
  popularity: number;
  uri: string;
}


export interface Artist {
  id: string;
  name: string;
  images: { url: string }[];
}

