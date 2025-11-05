'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

interface VideoPlayerProps {
  src: string
  poster?: string
  title?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
}

export default function VideoPlayer({
  src,
  poster,
  title,
  autoplay = false,
  muted = false,
  loop = false,
  controls = true,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    const video = document.getElementById('video-player') as HTMLVideoElement
    if (video) {
      video.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="relative w-full rounded-xl overflow-hidden shadow-heavy group">
      {/* Video Element */}
      <video
        id="video-player"
        className="w-full h-full object-cover"
        poster={poster}
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play Button Overlay (shows when video is paused) */}
      {!isPlaying && !autoplay && (
        <button
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all cursor-pointer"
          aria-label="Play video"
        >
          <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
            <Play size={40} className="text-ocean-blue ml-1" style={{ flexShrink: 0 }} />
          </div>
        </button>
      )}

      {/* Title Overlay (optional) */}
      {title && !isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <h3 className="text-white text-2xl font-bold">{title}</h3>
        </div>
      )}
    </div>
  )
}

