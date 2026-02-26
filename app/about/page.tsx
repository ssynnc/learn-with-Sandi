import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Globe,
  GraduationCap,
  Headphones,
  MessageCircle,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Neon glow effects */}
      <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-neon-purple/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute right-1/3 top-32 h-72 w-72 rounded-full bg-neon-blue/20 blur-[120px] animate-glow-pulse" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-24 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Story</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            About <span className="text-primary">LearnWithSandi</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            A language learning platform dedicated to helping students master
            English and Korean through engaging, structured video courses and
            practical conversation skills.
          </p>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="border-y border-border/50 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Our Mission
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
              Making Language Learning Accessible for Everyone
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              At LearnWithSandi, we believe that language is the key to
              unlocking new opportunities, cultures, and connections. Our
              mission is to help students learn English and Korean effectively
              through carefully designed courses that focus on real-world
              communication skills.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We understand that every learner is different, which is why our
              courses cater to all skill levels, from complete beginners to
              intermediate speakers looking to refine their fluency. Our
              structured, step-by-step approach ensures that you build
              confidence with every lesson.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-neon-purple/15 to-neon-blue/15 blur-xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-border/50 bg-background p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                  <Globe className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 font-semibold text-foreground">
                    2 Languages
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    English & Korean
                  </p>
                </div>
                <div className="rounded-xl border border-border/50 bg-background p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                  <GraduationCap className="h-8 w-8 text-secondary" />
                  <h3 className="mt-3 font-semibold text-foreground">
                    All Levels
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Beginner to Advanced
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                <div className="rounded-xl border border-border/50 bg-background p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                  <Headphones className="h-8 w-8 text-secondary" />
                  <h3 className="mt-3 font-semibold text-foreground">
                    Self-Paced
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Learn anytime
                  </p>
                </div>
                <div className="rounded-xl border border-border/50 bg-background p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                  <MessageCircle className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 font-semibold text-foreground">
                    Practical
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Real conversations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeOfferSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Structured Video Courses",
      description:
        "Carefully organized video lessons that build upon each other, taking you from fundamentals to fluency with a clear learning path.",
    },
    {
      icon: GraduationCap,
      title: "Beginner Friendly Lessons",
      description:
        "No prior knowledge required. Our courses start from the very basics and gradually progress, making language learning approachable for everyone.",
    },
    {
      icon: MessageCircle,
      title: "Speaking Practice",
      description:
        "Develop real conversation skills through practical dialogue exercises, pronunciation drills, and real-world scenario simulations.",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description:
        "Monitor your learning journey with built-in progress indicators. See how far you have come and stay motivated to reach your goals.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
          <BookOpen className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            What We Offer
          </span>
        </div>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
          Everything You Need to Succeed
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Our platform is designed with one goal in mind: to help you learn
          languages effectively and enjoyably.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
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
          <div className="relative order-2 md:order-1">
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
          <div className="order-1 md:order-2">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Meet Your Instructor
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Aye Sandi Htun
            </h2>
            <p className="mt-2 text-lg text-primary">Language Instructor</p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Aye Sandi Htun is a passionate language instructor specializing in
              English and Korean. With years of dedicated teaching experience,
              she has helped hundreds of students achieve their language
              learning goals.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Her teaching philosophy centers on making learning practical and
              enjoyable. Every course is designed with real-world application in
              mind, ensuring students can use what they learn in their daily
              lives. From structured grammar lessons to free-flowing
              conversation practice, Sandi creates a supportive environment
              where every learner can thrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-border/50 bg-background px-4 py-2 text-sm font-medium text-foreground">
                English Instructor
              </div>
              <div className="rounded-full border border-border/50 bg-background px-4 py-2 text-sm font-medium text-foreground">
                Korean Instructor
              </div>
              <div className="rounded-full border border-border/50 bg-background px-4 py-2 text-sm font-medium text-foreground">
                Language Educator
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "500+", label: "Students", icon: Users },
    { value: "12", label: "Courses", icon: BookOpen },
    { value: "55+", label: "Lessons", icon: GraduationCap },
    { value: "4.7", label: "Average Rating", icon: Star },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
          Platform Statistics
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Numbers that reflect the trust and growth of our learning community.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-8 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-blue/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="mt-4 text-4xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="border-t border-border/50 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-background">
          {/* Glow effects */}
          <div className="absolute left-1/4 top-0 h-48 w-48 rounded-full bg-neon-purple/20 blur-[100px]" />
          <div className="absolute right-1/4 bottom-0 h-48 w-48 rounded-full bg-neon-blue/20 blur-[100px]" />

          <div className="relative px-6 py-16 text-center md:px-12 md:py-20">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
              Start Your Language Learning Journey Today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Join thousands of students who are already building their language
              skills with LearnWithSandi. Your first step starts here.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/courses">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40"
                >
                  Browse Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border/50 text-foreground hover:bg-muted"
                >
                  Create Free Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <WhatWeOfferSection />
      <InstructorSection />
      <StatsSection />
      <CTASection />
    </>
  );
}
