import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Globe,
  Headphones,
  Play,
  TrendingUp,
  Users,
  Mic,
  Briefcase,
  GraduationCap,
  MessageCircle,
  FileText,
  Award,
  Type,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/course-card";
import { BlogCard } from "@/components/blog-card";
import { courses, reviews, blogPosts, categories } from "@/lib/data";
import { ReviewCarousel } from "@/components/review-carousel";

const iconMap: Record<string, React.ElementType> = {
  mic: Mic,
  "book-open": BookOpen,
  text: Type,
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
  "message-circle": MessageCircle,
  "file-text": FileText,
  award: Award,
};

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Neon glow effects */}
      <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-neon-purple/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute right-1/4 top-40 h-72 w-72 rounded-full bg-neon-blue/20 blur-[120px] animate-glow-pulse" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-24 lg:px-8 lg:pb-32 lg:pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              English & Korean Language Courses
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            Master English and Korean with{" "}
            <span className="text-primary">LearnWithSandi</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Learn languages through engaging video lessons designed to build
            your confidence and fluency, step by step.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/courses">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/courses/english-speaking-mastery">
              <Button
                size="lg"
                variant="outline"
                className="border-border/50 text-foreground hover:bg-muted"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-xl grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-foreground">12</p>
              <p className="mt-1 text-sm text-muted-foreground">Courses</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">500+</p>
              <p className="mt-1 text-sm text-muted-foreground">Students</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">4.7</p>
              <p className="mt-1 text-sm text-muted-foreground">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCourses() {
  const featured = courses.slice(0, 4);
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
          Featured Courses
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Choose from our expertly crafted courses in English and Korean,
          designed for all skill levels.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/courses">
          <Button
            variant="outline"
            className="border-border/50 text-foreground hover:bg-muted"
          >
            View All 12 Courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="border-y border-border/50 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Course Categories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Browse courses by topic and find the perfect fit for your learning
            goals.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || BookOpen;
            return (
              <Link
                key={cat.id}
                href={`/courses?category=${encodeURIComponent(cat.name)}`}
              >
                <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-background p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-blue/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {cat.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {cat.description}
                    </p>
                    <p className="mt-3 text-xs font-medium text-primary">
                      {cat.courseCount}{" "}
                      {cat.courseCount === 1 ? "course" : "courses"}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: Play,
      title: "Video Lessons",
      description:
        "High-quality video content with clear explanations and visual aids for better understanding.",
    },
    {
      icon: Users,
      title: "Expert Instructor",
      description:
        "Learn from Aye Sandi Htun, an experienced language instructor with proven teaching methods.",
    },
    {
      icon: Headphones,
      title: "Learn at Your Pace",
      description:
        "Access lessons anytime, anywhere. Replay as many times as you need to master each topic.",
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description:
        "Monitor your learning journey with progress indicators and structured curriculum.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
          Why Learn With Us
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Our platform is built to make language learning effective, enjoyable,
          and accessible.
        </p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="group rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
              <benefit.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              {benefit.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function InstructorSection() {
  return (
    <section className="border-y border-border/50 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 blur-xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/50">
              <Image
                src="/images/instructor.jpg"
                alt="Aye Sandi Htun - Language Instructor"
                width={600}
                height={600}
                className="aspect-square object-cover"
              />
            </div>
          </div>
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Meet Your Instructor
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Aye Sandi Htun
            </h2>
            <p className="mt-2 text-lg text-primary">Language Instructor</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Expert in English and Korean language teaching with a passion for
              making language learning accessible and fun. With years of
              experience in teaching both languages, Sandi has developed a
              unique methodology that combines structured learning with
              practical conversation skills.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether you are starting from scratch or looking to polish your
              skills, Sandi will guide you every step of the way with clear,
              engaging, and well-structured lessons.
            </p>
            <Link href="/about" className="mt-6 inline-block">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Learn More About Sandi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
          What Our Students Say
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Hear from students who have transformed their language skills with
          LearnWithSandi.
        </p>
      </div>
      <div className="mt-12">
        <ReviewCarousel reviews={reviews} />
      </div>
    </section>
  );
}

function BlogPreview() {
  return (
    <section className="border-t border-border/50 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            From Our Blog
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Tips, guides, and insights to support your language learning
            journey.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-border/50 text-foreground hover:bg-muted"
            >
              Read All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      <CategoriesSection />
      <BenefitsSection />
      <InstructorSection />
      <ReviewsSection />
      <BlogPreview />
    </>
  );
}
