"use client"

import { useState, useMemo } from "react"
import { Search, X, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CourseCard } from "@/components/course-card"
import { courses, categories } from "@/lib/data"

const languages = ["English", "Korean"] as const
const levels = ["Beginner", "Intermediate", "Advanced"] as const
const prices = ["Free", "Paid"] as const

export function CoursesClient() {
  const [search, setSearch] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // Search
      if (search) {
        const q = search.toLowerCase()
        if (
          !course.title.toLowerCase().includes(q) &&
          !course.description.toLowerCase().includes(q) &&
          !course.category.toLowerCase().includes(q)
        ) {
          return false
        }
      }
      // Language
      if (selectedLanguage && course.language !== selectedLanguage) return false
      // Level
      if (selectedLevel && course.level !== selectedLevel) return false
      // Price
      if (selectedPrice === "Free" && !course.isFree) return false
      if (selectedPrice === "Paid" && course.isFree) return false
      // Category
      if (selectedCategory && course.category !== selectedCategory) return false
      return true
    })
  }, [search, selectedLanguage, selectedLevel, selectedPrice, selectedCategory])

  const hasFilters = selectedLanguage || selectedLevel || selectedPrice || selectedCategory || search
  const clearAll = () => {
    setSearch("")
    setSelectedLanguage(null)
    setSelectedLevel(null)
    setSelectedPrice(null)
    setSelectedCategory(null)
  }

  return (
    <div className="mt-10">
      {/* Search + Filter Toggle */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search courses by title or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-border/50 bg-card py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <Button
          variant="outline"
          className="border-border/50 text-foreground hover:bg-muted sm:px-6"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
          {hasFilters && (
            <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {[selectedLanguage, selectedLevel, selectedPrice, selectedCategory].filter(Boolean).length}
            </span>
          )}
        </Button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="mt-4 rounded-xl border border-border/50 bg-card p-6 transition-all">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Language */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-foreground">Language</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(selectedLanguage === lang ? null : lang)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                      selectedLanguage === lang
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                        : "border border-border/50 bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Level */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-foreground">Level</h3>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                      selectedLevel === level
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                        : "border border-border/50 bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-foreground">Price</h3>
              <div className="flex flex-wrap gap-2">
                {prices.map((price) => (
                  <button
                    key={price}
                    onClick={() => setSelectedPrice(selectedPrice === price ? null : price)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                      selectedPrice === price
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                        : "border border-border/50 bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {price}
                  </button>
                ))}
              </div>
            </div>

            {/* Category */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-foreground">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                      selectedCategory === cat.name
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                        : "border border-border/50 bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {hasFilters && (
            <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4">
              <p className="text-sm text-muted-foreground">
                Showing {filteredCourses.length} of {courses.length} courses
              </p>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" onClick={clearAll}>
                <X className="mr-1 h-3 w-3" />
                Clear All
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Results Count (outside filter panel) */}
      {hasFilters && !showFilters && (
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" onClick={clearAll}>
            <X className="mr-1 h-3 w-3" />
            Clear Filters
          </Button>
        </div>
      )}

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-card py-20 text-center">
          <Search className="h-12 w-12 text-muted-foreground/50" />
          <h2 className="mt-4 text-xl font-semibold text-foreground">No courses found</h2>
          <p className="mt-2 text-muted-foreground">Try adjusting your search or filters.</p>
          <Button className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90" onClick={clearAll}>
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  )
}
