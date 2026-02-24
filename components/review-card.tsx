import Image from "next/image"
import { Star } from "lucide-react"
import type { Review } from "@/lib/data"

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30">
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
