import { useSession } from "next-auth/react";
import useTopTracksByTimeRange from "../hooks/useTopTracksByTimeRange";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const TopTracks = () => {
  const { data: session, status } = useSession();
  const accessToken = session?.accessToken;
  const [timeRange, setTimeRange] = useState<string>("short_term");
  const router = useRouter();
  const { tracks, loading, error } = useTopTracksByTimeRange(accessToken, timeRange);
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin");
    }
  }, [status, router]);
  const timeRanges = [
    { label: "Last 4 Weeks", value: "short_term" },
    { label: "Last 6 Months", value: "medium_term" },
    { label: "All Time", value: "long_term" },
  ];

  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">Error: {error}</div>;

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen text-white flex flex-col items-center py-20">
      <h1 className="text-4xl font-bold mb-8">Your Top Tracks</h1>

      <div className="flex space-x-4 mb-8">
        {timeRanges.map((range) => (
          <button
            key={range.value}
            onClick={() => setTimeRange(range.value)}
            className={`px-4 py-2 rounded-full ${
              timeRange === range.value
                ? "bg-indigo-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {range.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl">
        {tracks.map((track,index) => (
          <div key={track.id} className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <span className="absolute top-2 left-2 bg-indigo-600 text-white px-2 py-1 text-sm font-bold rounded-full">#{index + 1}</span>
            <Image
              src={track.album.images[0]?.url}
              alt={track.name}
              width={200}
              height={250}
              className="rounded-full mx-auto mb-4"
              style={{ aspectRatio: "1 / 1" }}
            />
            <h2 className="text-xl font-semibold">{track.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTracks;
