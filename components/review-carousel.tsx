"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import type { Review } from "@/lib/data"

function CarouselCard({ review }: { review: Review }) {
  return (
    <div className="w-[300px] shrink-0 rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 sm:w-[340px]">
      <div className="flex items-center gap-3">
        <Image
          src={review.avatar}
          alt={review.name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-foreground">{review.name}</h4>
          <p className="text-xs text-muted-foreground">{review.course}</p>
        </div>
      </div>
      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`}
          />
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {`"${review.text}"`}
      </p>
    </div>
  )
}

export function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const animationRef = useRef<number | null>(null)
  const scrollPositionRef = useRef(0)

  // Duplicate for infinite loop
  const allReviews = [...reviews, ...reviews, ...reviews]

  const animate = useCallback(() => {
    const el = scrollRef.current
    if (!el || isPaused) {
      animationRef.current = requestAnimationFrame(animate)
      return
    }

    scrollPositionRef.current += 0.5
    // Reset when we've scrolled past one full set
    const singleSetWidth = el.scrollWidth / 3
    if (scrollPositionRef.current >= singleSetWidth) {
      scrollPositionRef.current = 0
    }
    el.scrollLeft = scrollPositionRef.current
    animationRef.current = requestAnimationFrame(animate)
  }, [isPaused])

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [animate])

  // Touch/swipe support
  const touchStartRef = useRef(0)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true)
    touchStartRef.current = e.touches[0].clientX
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    const diff = touchStartRef.current - e.touches[0].clientX
    if (scrollRef.current) {
      scrollPositionRef.current += diff
      scrollRef.current.scrollLeft = scrollPositionRef.current
    }
    touchStartRef.current = e.touches[0].clientX
  }
  const handleTouchEnd = () => {
    setIsPaused(false)
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {allReviews.map((review, index) => (
          <CarouselCard key={`${review.id}-${index}`} review={review} />
        ))}
      </div>
    </div>
  )
}
