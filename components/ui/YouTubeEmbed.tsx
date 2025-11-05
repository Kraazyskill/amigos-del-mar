'use client'

interface YouTubeEmbedProps {
  videoId: string
  title?: string
  autoplay?: boolean
}

export default function YouTubeEmbed({ 
  videoId, 
  title = 'YouTube video player',
  autoplay = false 
}: YouTubeEmbedProps) {
  const src = `https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1&mute=1' : ''}`

  return (
    <div className="relative w-full rounded-xl overflow-hidden shadow-heavy" style={{ paddingBottom: '56.25%' }}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
        style={{
          border: 0,
          maxWidth: '100%',
        }}
      />
    </div>
  )
}

