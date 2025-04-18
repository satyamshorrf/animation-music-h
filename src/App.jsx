import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import IntroScreen from "./pages/IntroScreen";


// Pages
import HomePage from "./pages/HomePage";
import ArtistPage from "./pages/ArtistPage";
import AlbumPage from "./pages/AlbumPage";
import SongPage from "./pages/SongPage";
import SearchPage from "./pages/SearchPage";

import PlaylistPage from "./pages/PlaylistPage";
import NotFoundPage from "./pages/NotFoundPage";

// Components
import Navbar from "./components/Navbar";

import MusicPlayer from "./components/MusicPlayer";

function App() {
    const [started, setStarted] = useState(false);

  if (!started) {
    // ❌ Don't render Navbar, Footer, or any other page during splash
    return <IntroScreen onStart={() => setStarted(true)} />;
  }
  return (
    <div className="relative z-10 pt-20 min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artists" element={<ArtistPage />} />
          <Route path="/albums" element={<AlbumPage />} />
          <Route path="/songs" element={<SongPage />} />

          <Route path="/search" element={<SearchPage />} />

          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      

      <div className="fixed bottom-0 left-0 w-full z-50">
      </div>
    </div>
    </div>
  );
}

export default App;