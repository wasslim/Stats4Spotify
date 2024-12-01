# Stats for Spotify

Stats for Spotify is a web application that provides users with insights into their Spotify listening habits. Users can view their top artists and tracks over different time ranges and explore detailed statistics about their music preferences.

## Features

- **Spotify Authentication**: Securely log in using your Spotify account.
- **Top Artists**: View your most listened-to artists.
- **Top Tracks**: Explore your favorite tracks with rankings.
- **Time Range Selection**: Choose between short-term (last 4 weeks), medium-term (last 6 months), or long-term (all time) statistics.
- **Responsive Design**: Optimized for all screen sizes using TailwindCSS.

## Tech Stack

- **Frontend**: React with Next.js
- **Styling**: TailwindCSS
- **Authentication**: NextAuth.js with Spotify OAuth
- **Backend**: Spotify Web API
- **TypeScript**: Strongly typed codebase

## Getting Started

### Prerequisites

1. Node.js (v14 or later)
2. A Spotify Developer account

### Spotify Developer Setup

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).
2. Create a new app.
3. Set the Redirect URI to:
   ```
   http://localhost:3000/api/auth/callback/spotify
   ```
4. Note the `Client ID` and `Client Secret` for your app.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/stats-for-spotify.git
   cd stats-for-spotify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root of the project and add the following environment variables:
   ```env
   SPOTIFY_CLIENT_ID=your_client_id
   SPOTIFY_CLIENT_SECRET=your_client_secret
   NEXTAUTH_URL=http://localhost:3000
   CORS_ORIGIN=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
src/
├── components/           # Reusable UI components
├── hooks/                # Custom hooks for API calls
├── pages/                # Next.js pages
│   ├── api/              # API routes
│   │   └── auth/         # NextAuth configuration
│   ├── index.tsx         # Landing page
│   └── top-artists.tsx   # Top artists page
│   └── top-tracks.tsx    # Top tracks page
├── services/             # Spotify API service functions
├── styles/               # TailwindCSS configuration
└── types/                # TypeScript type definitions
```

## Customization

### Adding More Insights

You can extend the app by adding more features like:
- Recently played tracks
- Playlist statistics
- Recommendations based on top artists/tracks

### Styling

The app uses TailwindCSS for styling. You can customize the design by modifying the classes in the `src/styles/global.css` file or directly in components.

## Deployment

1. Build the app:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

3. Deploy on a platform like Vercel for seamless Next.js hosting.

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Spotify Developer API](https://developer.spotify.com/documentation/web-api/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/)

---

Feel free to reach out if you encounter any issues or have suggestions for improvements!

