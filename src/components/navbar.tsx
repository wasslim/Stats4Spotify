import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 text-white py-4 px-6 shadow-md fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Stats for Spotify
        </Link>
        <div className="space-x-6 flex items-center">
          <Link href="/top-artists" className="hover:text-gray-300">
            Top Artists
          </Link>
          <Link href="/top-tracks" className="hover:text-gray-300">
            Top Tracks
          </Link>
          {session ? (
            <div className="flex items-center space-x-4">
              <span>Signed in: {session.user?.name}</span>
              <button
                onClick={() => signOut()}
                className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-500"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn("spotify", { callbackUrl: "/top-artists" })}
              className="bg-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-500"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
