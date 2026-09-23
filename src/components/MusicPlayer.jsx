import { useRef, useState } from "react";
import trackSrc from "../assets/audio/november rain.mp3";

// Tombol musik melayang: tidak autoplay (browser modern selalu blokir
// autoplay bersuara), user klik untuk mulai, dan loop otomatis selama aktif.
export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        // Kalau browser tetap menolak play (jarang terjadi setelah klik user),
        // biarkan tombolnya tetap di posisi "belum main".
        setPlaying(false);
      });
    }
    setPlaying((prev) => !prev);
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src={trackSrc} loop preload="none" />
      <button
        type="button"
        className={`music-player__btn${playing ? " is-playing" : ""}`}
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Jeda musik latar" : "Putar musik latar"}
      >
        <span className="music-player__bars" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
        {playing ? "Playing" : "Play music"}
      </button>
    </div>
  );
}
