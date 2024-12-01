import Link from "next/link";
import { useSession } from "next-auth/react";

export default function LandingPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="bg-gradient-to-b from-blue-500 to-indigo-600 min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-blue-500 to-indigo-600 min-h-screen flex flex-col items-center justify-center text-white">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to stats for spotify</h1>
        <p className="text-xl mb-8">
          Discover your favorite artists and tracks effortlessly.
        </p>
        <div>
          {session ? (
            <Link href="/top-artists">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200">
                Go to Dashboard
              </button>
            </Link>
          ) : (
            <Link href="/api/auth/signin">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200">
                Get Started
              </button>
            </Link>
          )}
        </div>
      </header>

      {/* Footer Section */}
      <footer className="mt-16 text-center text-sm text-gray-300">
        <p>&copy; 2024 My Music App. All rights reserved.</p>
      </footer>
    </div>
  );
}
