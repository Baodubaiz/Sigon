import { useState, useRef, useEffect } from 'react'
import showreelVideo from '../../assets/videos/Bản sao của SHOWREEL 2025.mp4'
import heroImg from '../../assets/images/studio/Mix room.jpg'
import './Showreel.css'

export function Showreel() {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const cardRef = useRef<HTMLDivElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)

    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    const [progress, setProgress] = useState(0)
    const [currentTime, setCurrentTime] = useState('00:00')
    const [duration, setDuration] = useState('00:00')
    const [isHovering, setIsHovering] = useState(false)
    const [hasUserPaused, setHasUserPaused] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)

    // Format seconds to mm:ss
    const formatTime = (seconds: number) => {
        if (isNaN(seconds)) return '00:00'
        const mins = Math.floor(seconds / 60)
        const secs = Math.floor(seconds % 60)
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    // Auto-play on scroll into view via IntersectionObserver
    useEffect(() => {
        const video = videoRef.current
        const container = containerRef.current
        if (!video || !container) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasUserPaused) {
                        // Browsers require video to be muted for autoplay
                        video.muted = isMuted
                        const playPromise = video.play()
                        if (playPromise !== undefined) {
                            playPromise
                                .then(() => setIsPlaying(true))
                                .catch((err) => {
                                    console.log('Autoplay deferred by browser policy:', err)
                                })
                        }
                    } else if (!entry.isIntersecting) {
                        video.pause()
                        setIsPlaying(false)
                    }
                })
            },
            {
                threshold: 0.35,
            }
        )

        observer.observe(container)
        return () => observer.disconnect()
    }, [hasUserPaused, isMuted])

    // Listen to fullscreen changes
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(Boolean(document.fullscreenElement))
        }
        document.addEventListener('fullscreenchange', handleFullscreenChange)
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange)
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
        }
    }, [])

    // Update progress bar and playback time
    const handleTimeUpdate = () => {
        const video = videoRef.current
        if (!video) return
        if (video.duration) {
            setProgress((video.currentTime / video.duration) * 100)
            setCurrentTime(formatTime(video.currentTime))
        }
    }

    const handleLoadedMetadata = () => {
        const video = videoRef.current
        if (!video) return
        setDuration(formatTime(video.duration))
    }

    // Toggle Play / Pause
    const togglePlay = () => {
        const video = videoRef.current
        if (!video) return

        if (video.paused) {
            video.play()
            setIsPlaying(true)
            setHasUserPaused(false)
        } else {
            video.pause()
            setIsPlaying(false)
            setHasUserPaused(true)
        }
    }

    // Toggle Mute
    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation()
        const video = videoRef.current
        if (!video) return

        video.muted = !video.muted
        setIsMuted(video.muted)
    }

    // Seek on progress bar click
    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        const video = videoRef.current
        if (!video) return

        const rect = e.currentTarget.getBoundingClientRect()
        const clickPos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
        video.currentTime = clickPos * video.duration
        setProgress(clickPos * 100)
    }

    // Toggle Fullscreen
    const toggleFullscreen = (e: React.MouseEvent) => {
        e.stopPropagation()
        const card = cardRef.current
        const video = videoRef.current
        if (!card && !video) return

        if (!document.fullscreenElement) {
            if (card?.requestFullscreen) {
                card.requestFullscreen().catch(() => {
                    if (video?.requestFullscreen) video.requestFullscreen()
                })
            } else if ((video as any)?.webkitEnterFullscreen) {
                (video as any).webkitEnterFullscreen()
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen().catch((err) => console.log(err))
            }
        }
    }

    return (
        <section className="showreel-section" id="showreel">
            <div className="showreel-header">
                <div className="section-heading left-aligned">
                    <div className="eyebrow-pill">
                        <span className="eyebrow-dot" />
                        <span className="eyebrow">SHOWREEL 2025</span>
                    </div>
                    <h2>The Sound of Vietnamese Cinema</h2>
                    <p className="showreel-subtitle">
                        Step inside our soundscape. Featuring award-winning sound design,
                        foley, and theatrical surround mixing across recent blockbuster releases.
                    </p>
                </div>
            </div>

            {/* Video Container with Cinema Ambilight Glow */}
            <div className="showreel-wrapper" ref={containerRef}>
                <div
                    className={`cinema-ambient-glow ${isPlaying ? 'active' : ''}`}
                    aria-hidden="true"
                />

                <div
                    className={`showreel-video-card ${isFullscreen ? 'fullscreen-mode' : ''}`}
                    ref={cardRef}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={togglePlay}
                >
                    <video
                        ref={videoRef}
                        playsInline
                        muted={isMuted}
                        loop
                        preload="metadata"
                        poster={heroImg}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleLoadedMetadata}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        className="showreel-video-element"
                    >
                        <source src={showreelVideo} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>

                    {/* Big Center Play Button when paused */}
                    {!isPlaying && (
                        <div className="center-play-overlay">
                            <button
                                type="button"
                                className="center-play-btn"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    togglePlay()
                                }}
                                aria-label="Play Showreel Video"
                            >
                                <div className="play-pulse-ring" />
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <polygon points="6 3 20 12 6 21 6 3" />
                                </svg>
                            </button>
                            <span className="play-hint-text">Click to Play with Sound</span>
                        </div>
                    )}

                    {/* Floating Unmute Indicator Pill (Bottom Right, above controls) */}
                    {isMuted && isPlaying && (
                        <button
                            type="button"
                            className="floating-sound-pill"
                            onClick={toggleMute}
                            aria-label="Unmute video sound"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="1" y1="1" x2="23" y2="23" />
                                <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
                                <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" />
                                <line x1="12" y1="19" x2="12" y2="23" />
                                <line x1="8" y1="23" x2="16" y2="23" />
                            </svg>
                            <span>Click for Sound</span>
                        </button>
                    )}

                    {/* Bottom Custom Control Bar */}
                    <div
                        className={`video-custom-controls ${!isPlaying || isHovering || isFullscreen ? 'visible' : ''}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Progress Scrubber */}
                        <div
                            className="progress-container"
                            onClick={handleSeek}
                            role="slider"
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={progress}
                        >
                            <div className="progress-track">
                                <div
                                    className="progress-filled"
                                    style={{ width: `${progress}%` }}
                                >
                                    <div className="progress-thumb" />
                                </div>
                            </div>
                        </div>

                        <div className="controls-row">
                            <div className="controls-left">
                                <button
                                    type="button"
                                    className="control-btn"
                                    onClick={togglePlay}
                                    aria-label={isPlaying ? 'Pause' : 'Play'}
                                    title={isPlaying ? 'Pause' : 'Play'}
                                >
                                    {isPlaying ? (
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <rect x="6" y="4" width="4" height="16" rx="1" />
                                            <rect x="14" y="4" width="4" height="16" rx="1" />
                                        </svg>
                                    ) : (
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <polygon points="5 3 19 12 5 21 5 3" />
                                        </svg>
                                    )}
                                </button>

                                <button
                                    type="button"
                                    className={`control-btn sound-btn ${!isMuted ? 'active' : ''}`}
                                    onClick={toggleMute}
                                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                                    title={isMuted ? 'Unmute' : 'Mute'}
                                >
                                    {isMuted ? (
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                            <line x1="23" y1="9" x2="17" y2="15" />
                                            <line x1="17" y1="9" x2="23" y2="15" />
                                        </svg>
                                    ) : (
                                        <div className="mini-equalizer-wrap">
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                                            </svg>
                                        </div>
                                    )}
                                </button>

                                <div className="time-display">
                                    <span className="current-time">{currentTime}</span>
                                    <span className="time-sep">/</span>
                                    <span className="duration">{duration}</span>
                                </div>
                            </div>

                            <div className="controls-right">
                                <div className="video-badges-inline">
                                    <span className="video-badge gold">DOLBY ATMOS</span>
                                </div>

                                <button
                                    type="button"
                                    className="control-btn"
                                    onClick={toggleFullscreen}
                                    aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                                    title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                                >
                                    {isFullscreen ? (
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                                        </svg>
                                    ) : (
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showreel
