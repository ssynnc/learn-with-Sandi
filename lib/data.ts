export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  currency: string;
  isFree: boolean;
  rating: number;
  reviewCount: number;
  thumbnail: string;
  language: "English" | "Korean";
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  order: number;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  course: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  courseCount: number;
}

export const categories: Category[] = [
  {
    id: "english-speaking",
    name: "English Speaking",
    description: "Build confidence in everyday English conversations.",
    icon: "mic",
    courseCount: 2,
  },
  {
    id: "english-grammar",
    name: "English Grammar",
    description: "Master the rules and structures of English.",
    icon: "book-open",
    courseCount: 1,
  },
  {
    id: "english-vocabulary",
    name: "English Vocabulary",
    description: "Expand your English word bank effectively.",
    icon: "text",
    courseCount: 1,
  },
  {
    id: "business-english",
    name: "Business English",
    description: "Communicate professionally in the workplace.",
    icon: "briefcase",
    courseCount: 1,
  },
  {
    id: "korean-beginners",
    name: "Korean for Beginners",
    description: "Start your Korean journey from zero.",
    icon: "graduation-cap",
    courseCount: 2,
  },
  {
    id: "korean-conversation",
    name: "Korean Conversation",
    description: "Practice real Korean dialogues.",
    icon: "message-circle",
    courseCount: 2,
  },
  {
    id: "korean-grammar",
    name: "Korean Grammar",
    description: "Understand Korean sentence structures.",
    icon: "file-text",
    courseCount: 1,
  },
  {
    id: "topik-preparation",
    name: "TOPIK Preparation",
    description: "Get ready for the official Korean test.",
    icon: "award",
    courseCount: 1,
  },
];

export const courses: Course[] = [
  // ---- ENGLISH COURSES ----
  {
    id: "english-speaking-mastery",
    title: "English Speaking Mastery",
    description:
      "Master conversational English with real-world scenarios, pronunciation drills, and interactive speaking exercises. Perfect for those who want to communicate confidently in everyday situations.",
    instructor: "Aye Sandi Htun",
    price: 0,
    currency: "MMK",
    isFree: true,
    rating: 4.8,
    reviewCount: 324,
    thumbnail: "/images/course-english-speaking.jpg",
    language: "English",
    level: "Intermediate",
    category: "English Speaking",
    lessons: [
      {
        id: "es-1",
        title: "Introduction to Conversational English",
        description:
          "Get started with the fundamentals of natural conversation flow.",
        videoUrl: "/introductionvideo.mp4",
        duration: "12:30",
        order: 1,
      },
      {
        id: "es-2",
        title: "Everyday Greetings & Small Talk",
        description:
          "Learn common greetings and how to start conversations naturally.",
        videoUrl: "/introductionvideo.mp4",
        duration: "15:45",
        order: 2,
      },
      {
        id: "es-3",
        title: "Pronunciation Fundamentals",
        description:
          "Master the key sounds that make your English clear and natural.",
        videoUrl: "/introductionvideo.mp4",
        duration: "18:20",
        order: 3,
      },
      {
        id: "es-4",
        title: "Speaking with Confidence",
        description:
          "Techniques to overcome speaking anxiety and express yourself clearly.",
        videoUrl: "/introductionvideo.mp4",
        duration: "14:10",
        order: 4,
      },
      {
        id: "es-5",
        title: "Real-World Practice Scenarios",
        description:
          "Practice with common real-life situations like ordering food and asking for directions.",
        videoUrl: "/introductionvideo.mp4",
        duration: "20:00",
        order: 5,
      },
    ],
  },
  {
    id: "english-grammar-fundamentals",
    title: "English Grammar Fundamentals",
    description:
      "Build a solid grammar foundation with clear explanations, practical examples, and exercises. From tenses to sentence structures, master the building blocks of English.",
    instructor: "Aye Sandi Htun",
    price: 15000,
    currency: "MMK",
    isFree: false,
    rating: 4.6,
    reviewCount: 215,
    thumbnail: "/images/course-english-grammar.jpg",
    language: "English",
    level: "Beginner",
    category: "English Grammar",
    lessons: [
      {
        id: "eg-1",
        title: "Parts of Speech Overview",
        description: "Understand nouns, verbs, adjectives, and more.",
        videoUrl: "/introductionvideo.mp4",
        duration: "16:00",
        order: 1,
      },
      {
        id: "eg-2",
        title: "Present Tenses Made Simple",
        description:
          "Learn simple present, present continuous, and present perfect.",
        videoUrl: "/introductionvideo.mp4",
        duration: "22:15",
        order: 2,
      },
      {
        id: "eg-3",
        title: "Past & Future Tenses",
        description: "Master all past and future tense forms with examples.",
        videoUrl: "/introductionvideo.mp4",
        duration: "19:30",
        order: 3,
      },
      {
        id: "eg-4",
        title: "Sentence Structure Essentials",
        description: "Build correct and natural-sounding sentences.",
        videoUrl: "/introductionvideo.mp4",
        duration: "17:45",
        order: 4,
      },
    ],
  },
  {
    id: "english-vocabulary-builder",
    title: "English Vocabulary Builder",
    description:
      "Rapidly expand your English vocabulary with proven techniques including word maps, context learning, and spaced repetition methods for lasting retention.",
    instructor: "Aye Sandi Htun",
    price: 12000,
    currency: "MMK",
    isFree: false,
    rating: 4.7,
    reviewCount: 189,
    thumbnail: "/images/course-english-vocabulary.jpg",
    language: "English",
    level: "Beginner",
    category: "English Vocabulary",
    lessons: [
      {
        id: "ev-1",
        title: "Essential Everyday Words",
        description: "The 200 most important words for daily communication.",
        videoUrl: "/introductionvideo.mp4",
        duration: "14:00",
        order: 1,
      },
      {
        id: "ev-2",
        title: "Word Families & Roots",
        description: "Learn how to guess meaning from word roots.",
        videoUrl: "/introductionvideo.mp4",
        duration: "18:30",
        order: 2,
      },
      {
        id: "ev-3",
        title: "Vocabulary in Context",
        description: "Learn new words through stories and real-life examples.",
        videoUrl: "/introductionvideo.mp4",
        duration: "16:45",
        order: 3,
      },
      {
        id: "ev-4",
        title: "Memory Techniques for Vocabulary",
        description: "Proven methods to remember new words permanently.",
        videoUrl: "/introductionvideo.mp4",
        duration: "20:00",
        order: 4,
      },
    ],
  },
  {
    id: "business-english-communication",
    title: "Business English Communication",
    description:
      "Master professional English for the workplace. Learn how to write emails, give presentations, participate in meetings, and communicate with confidence in business settings.",
    instructor: "Aye Sandi Htun",
    price: 25000,
    currency: "MMK",
    isFree: false,
    rating: 4.5,
    reviewCount: 142,
    thumbnail: "/images/course-business-english.jpg",
    language: "English",
    level: "Advanced",
    category: "Business English",
    lessons: [
      {
        id: "be-1",
        title: "Professional Email Writing",
        description:
          "Write clear, professional emails for any business situation.",
        videoUrl: "/introductionvideo.mp4",
        duration: "19:00",
        order: 1,
      },
      {
        id: "be-2",
        title: "Meeting & Discussion English",
        description:
          "Participate confidently in business meetings and discussions.",
        videoUrl: "/introductionvideo.mp4",
        duration: "22:30",
        order: 2,
      },
      {
        id: "be-3",
        title: "Presentation Skills",
        description: "Deliver powerful presentations in English.",
        videoUrl: "/introductionvideo.mp4",
        duration: "25:00",
        order: 3,
      },
      {
        id: "be-4",
        title: "Negotiation & Persuasion",
        description: "Master the language of negotiation and persuasion.",
        videoUrl: "/introductionvideo.mp4",
        duration: "18:15",
        order: 4,
      },
    ],
  },
  {
    id: "ielts-speaking-preparation",
    title: "IELTS Speaking Preparation",
    description:
      "Prepare for the IELTS speaking test with strategies, sample answers, and practice sessions. Boost your band score with targeted exercises and expert tips.",
    instructor: "Aye Sandi Htun",
    price: 30000,
    currency: "MMK",
    isFree: false,
    rating: 4.9,
    reviewCount: 267,
    thumbnail: "/images/course-ielts-speaking.jpg",
    language: "English",
    level: "Advanced",
    category: "English Speaking",
    lessons: [
      {
        id: "is-1",
        title: "IELTS Speaking Overview",
        description:
          "Understand the format, scoring criteria, and test structure.",
        videoUrl: "/introductionvideo.mp4",
        duration: "15:00",
        order: 1,
      },
      {
        id: "is-2",
        title: "Part 1: Introduction Questions",
        description:
          "Practice answering personal and familiar topic questions.",
        videoUrl: "/introductionvideo.mp4",
        duration: "20:00",
        order: 2,
      },
      {
        id: "is-3",
        title: "Part 2: Cue Card Practice",
        description: "Master the long turn with structured speaking practice.",
        videoUrl: "/introductionvideo.mp4",
        duration: "22:00",
        order: 3,
      },
      {
        id: "is-4",
        title: "Part 3: Discussion Topics",
        description: "Develop skills for abstract discussion and opinions.",
        videoUrl: "/introductionvideo.mp4",
        duration: "24:00",
        order: 4,
      },
      {
        id: "is-5",
        title: "Mock Test & Feedback",
        description: "Complete practice test with scoring guidelines.",
        videoUrl: "/introductionvideo.mp4",
        duration: "30:00",
        order: 5,
      },
    ],
  },
  {
    id: "advanced-english-conversation",
    title: "Advanced English Conversation",
    description:
      "Take your English to the highest level with advanced conversation topics, idiomatic expressions, debate skills, and nuanced discussion techniques.",
    instructor: "Aye Sandi Htun",
    price: 0,
    currency: "MMK",
    isFree: true,
    rating: 4.8,
    reviewCount: 198,
    thumbnail: "/images/course-advanced-english.jpg",
    language: "English",
    level: "Advanced",
    category: "English Speaking",
    lessons: [
      {
        id: "ac-1",
        title: "Idiomatic Expressions",
        description: "Learn the most common idioms used in natural English.",
        videoUrl: "/introductionvideo.mp4",
        duration: "17:00",
        order: 1,
      },
      {
        id: "ac-2",
        title: "Debate & Discussion Skills",
        description:
          "Express opinions, agree, disagree, and debate effectively.",
        videoUrl: "/introductionvideo.mp4",
        duration: "21:00",
        order: 2,
      },
      {
        id: "ac-3",
        title: "Cultural Conversations",
        description:
          "Navigate cross-cultural topics with sensitivity and fluency.",
        videoUrl: "/introductionvideo.mp4",
        duration: "19:30",
        order: 3,
      },
      {
        id: "ac-4",
        title: "Storytelling in English",
        description: "Learn how to tell engaging stories and anecdotes.",
        videoUrl: "/introductionvideo.mp4",
        duration: "16:00",
        order: 4,
      },
    ],
  },
  // ---- KOREAN COURSES ----
  {
    id: "korean-for-beginners",
    title: "Korean for Beginners",
    description:
      "Start your Korean language journey from zero. Learn Hangul, basic vocabulary, essential grammar, and everyday phrases to kickstart your Korean adventure.",
    instructor: "Aye Sandi Htun",
    price: 20000,
    currency: "MMK",
    isFree: false,
    rating: 4.9,
    reviewCount: 412,
    thumbnail: "/images/course-korean-beginners.jpg",
    language: "Korean",
    level: "Beginner",
    category: "Korean for Beginners",
    lessons: [
      {
        id: "kb-1",
        title: "Introduction to Hangul",
        description: "Learn the Korean alphabet system from scratch.",
        videoUrl: "/introductionvideo.mp4",
        duration: "25:00",
        order: 1,
      },
      {
        id: "kb-2",
        title: "Basic Korean Greetings",
        description: "Essential greetings and polite expressions.",
        videoUrl: "/introductionvideo.mp4",
        duration: "18:30",
        order: 2,
      },
      {
        id: "kb-3",
        title: "Numbers & Counting",
        description: "Learn both native Korean and Sino-Korean number systems.",
        videoUrl: "/introductionvideo.mp4",
        duration: "20:15",
        order: 3,
      },
      {
        id: "kb-4",
        title: "Basic Sentence Patterns",
        description:
          "Understand the fundamentals of Korean sentence structure.",
        videoUrl: "/introductionvideo.mp4",
        duration: "22:00",
        order: 4,
      },
      {
        id: "kb-5",
        title: "Everyday Vocabulary",
        description: "Learn the most useful Korean words for daily life.",
        videoUrl: "/introductionvideo.mp4",
        duration: "16:45",
        order: 5,
      },
      {
        id: "kb-6",
        title: "Practice & Review",
        description: "Put everything together with practice exercises.",
        videoUrl: "/introductionvideo.mp4",
        duration: "19:00",
        order: 6,
      },
    ],
  },
  {
    id: "korean-conversation-practice",
    title: "Korean Conversation Practice",
    description:
      "Take your Korean to the next level with practical conversation drills. Practice real dialogues, learn natural expressions, and build confidence speaking Korean.",
    instructor: "Aye Sandi Htun",
    price: 0,
    currency: "MMK",
    isFree: true,
    rating: 4.7,
    reviewCount: 178,
    thumbnail: "/images/course-korean-conversation.jpg",
    language: "Korean",
    level: "Intermediate",
    category: "Korean Conversation",
    lessons: [
      {
        id: "kc-1",
        title: "Cafe Conversations",
        description: "Practice ordering and chatting at a Korean cafe.",
        videoUrl: "/introductionvideo.mp4",
        duration: "14:30",
        order: 1,
      },
      {
        id: "kc-2",
        title: "Shopping Dialogues",
        description: "Learn how to ask about prices, sizes, and more.",
        videoUrl: "/introductionvideo.mp4",
        duration: "16:00",
        order: 2,
      },
      {
        id: "kc-3",
        title: "Making Friends in Korean",
        description: "Introduce yourself and have casual conversations.",
        videoUrl: "/introductionvideo.mp4",
        duration: "18:45",
        order: 3,
      },
      {
        id: "kc-4",
        title: "Travel Korean Essentials",
        description: "Navigate airports, hotels, and tourist spots in Korean.",
        videoUrl: "/introductionvideo.mp4",
        duration: "21:00",
        order: 4,
      },
    ],
  },
  {
    id: "korean-grammar-basics",
    title: "Korean Grammar Basics",
    description:
      "Understand the core grammar structures of the Korean language. Learn particles, conjugation, sentence endings, and essential patterns used in daily Korean.",
    instructor: "Aye Sandi Htun",
    price: 18000,
    currency: "MMK",
    isFree: false,
    rating: 4.6,
    reviewCount: 156,
    thumbnail: "/images/course-korean-grammar.jpg",
    language: "Korean",
    level: "Beginner",
    category: "Korean Grammar",
    lessons: [
      {
        id: "kg-1",
        title: "Korean Sentence Structure",
        description: "Understand SOV structure and basic word order.",
        videoUrl: "/introductionvideo.mp4",
        duration: "20:00",
        order: 1,
      },
      {
        id: "kg-2",
        title: "Essential Particles",
        description: "Master the most common Korean particles and their uses.",
        videoUrl: "/introductionvideo.mp4",
        duration: "23:00",
        order: 2,
      },
      {
        id: "kg-3",
        title: "Verb Conjugation Basics",
        description:
          "Learn how to conjugate Korean verbs for different tenses.",
        videoUrl: "/introductionvideo.mp4",
        duration: "25:00",
        order: 3,
      },
      {
        id: "kg-4",
        title: "Common Sentence Patterns",
        description: "Master patterns used in everyday Korean communication.",
        videoUrl: "/introductionvideo.mp4",
        duration: "18:30",
        order: 4,
      },
    ],
  },
  {
    id: "korean-vocabulary-builder",
    title: "Korean Vocabulary Builder",
    description:
      "Expand your Korean vocabulary with themed word lists, visual associations, and practical usage examples. Build a strong foundation of essential Korean words.",
    instructor: "Aye Sandi Htun",
    price: 10000,
    currency: "MMK",
    isFree: false,
    rating: 4.5,
    reviewCount: 134,
    thumbnail: "/images/course-korean-vocabulary.jpg",
    language: "Korean",
    level: "Beginner",
    category: "Korean for Beginners",
    lessons: [
      {
        id: "kv-1",
        title: "Family & People Vocabulary",
        description:
          "Learn words for family members, occupations, and relationships.",
        videoUrl: "/introductionvideo.mp4",
        duration: "16:00",
        order: 1,
      },
      {
        id: "kv-2",
        title: "Food & Restaurant Words",
        description:
          "Essential vocabulary for eating out and cooking in Korean.",
        videoUrl: "/introductionvideo.mp4",
        duration: "18:00",
        order: 2,
      },
      {
        id: "kv-3",
        title: "Travel & Places",
        description: "Words and phrases for navigating Korean cities.",
        videoUrl: "/introductionvideo.mp4",
        duration: "15:30",
        order: 3,
      },
      {
        id: "kv-4",
        title: "Daily Life Expressions",
        description: "Common expressions used in everyday situations.",
        videoUrl: "/introductionvideo.mp4",
        duration: "17:00",
        order: 4,
      },
    ],
  },
  {
    id: "topik-preparation-course",
    title: "TOPIK Preparation Course",
    description:
      "Comprehensive preparation for the Test of Proficiency in Korean. Practice reading, listening, and writing sections with exam strategies and sample questions.",
    instructor: "Aye Sandi Htun",
    price: 35000,
    currency: "MMK",
    isFree: false,
    rating: 4.8,
    reviewCount: 223,
    thumbnail: "/images/course-topik-preparation.jpg",
    language: "Korean",
    level: "Advanced",
    category: "TOPIK Preparation",
    lessons: [
      {
        id: "tp-1",
        title: "TOPIK Overview & Strategy",
        description:
          "Understand the test format, scoring, and time management.",
        videoUrl: "/introductionvideo.mp4",
        duration: "18:00",
        order: 1,
      },
      {
        id: "tp-2",
        title: "Reading Section Practice",
        description:
          "Practice reading comprehension with real exam-style questions.",
        videoUrl: "/introductionvideo.mp4",
        duration: "28:00",
        order: 2,
      },
      {
        id: "tp-3",
        title: "Listening Section Practice",
        description: "Sharpen listening skills with practice audio passages.",
        videoUrl: "/introductionvideo.mp4",
        duration: "25:00",
        order: 3,
      },
      {
        id: "tp-4",
        title: "Writing Section Tips",
        description: "Learn how to structure written responses for high marks.",
        videoUrl: "/introductionvideo.mp4",
        duration: "22:00",
        order: 4,
      },
      {
        id: "tp-5",
        title: "Full Practice Test",
        description: "Simulate a complete TOPIK exam under test conditions.",
        videoUrl: "/introductionvideo.mp4",
        duration: "35:00",
        order: 5,
      },
    ],
  },
  {
    id: "intermediate-korean-speaking",
    title: "Intermediate Korean Speaking",
    description:
      "Bridge the gap between beginner and advanced Korean. Practice complex sentences, express opinions, and handle a variety of real-life speaking situations.",
    instructor: "Aye Sandi Htun",
    price: 0,
    currency: "MMK",
    isFree: true,
    rating: 4.7,
    reviewCount: 165,
    thumbnail: "/images/course-intermediate-korean.jpg",
    language: "Korean",
    level: "Intermediate",
    category: "Korean Conversation",
    lessons: [
      {
        id: "ik-1",
        title: "Expressing Opinions in Korean",
        description: "Learn how to share your thoughts and opinions naturally.",
        videoUrl: "/introductionvideo.mp4",
        duration: "19:00",
        order: 1,
      },
      {
        id: "ik-2",
        title: "Describing Experiences",
        description: "Talk about past experiences and future plans fluently.",
        videoUrl: "/introductionvideo.mp4",
        duration: "21:00",
        order: 2,
      },
      {
        id: "ik-3",
        title: "Phone & Messaging Korean",
        description: "Practice Korean used in phone calls and text messages.",
        videoUrl: "/introductionvideo.mp4",
        duration: "17:30",
        order: 3,
      },
      {
        id: "ik-4",
        title: "Cultural Nuances in Speaking",
        description:
          "Understand formality levels and cultural context in Korean speech.",
        videoUrl: "/introductionvideo.mp4",
        duration: "23:00",
        order: 4,
      },
    ],
  },
];

export const blogPosts: BlogPost[] = [
  // ---- ENGLISH BLOG POSTS ----
  {
    id: "10-tips-improve-english-speaking",
    title: "10 Tips to Improve English Speaking",
    description:
      "Discover proven strategies to enhance your English speaking skills, from daily practice routines to immersion techniques that actually work.",
    image: "/images/blog-english-tips.jpg",
    date: "2026-02-15",
    readTime: "5 min read",
    category: "English",
    author: "Aye Sandi Htun",
  },
  {
    id: "common-english-grammar-mistakes",
    title: "Common English Grammar Mistakes",
    description:
      "Avoid these frequent grammar errors that English learners make. Learn the correct forms and improve your writing and speaking accuracy.",
    image: "/images/blog-grammar-mistakes.jpg",
    date: "2026-02-12",
    readTime: "6 min read",
    category: "English",
    author: "Aye Sandi Htun",
  },
  {
    id: "build-english-vocabulary-faster",
    title: "How to Build English Vocabulary Faster",
    description:
      "Learn effective methods like spaced repetition, context learning, and word association to rapidly expand your English vocabulary.",
    image: "/images/blog-vocabulary-faster.jpg",
    date: "2026-02-09",
    readTime: "5 min read",
    category: "English",
    author: "Aye Sandi Htun",
  },
  {
    id: "best-techniques-learning-languages",
    title: "Best Techniques for Learning Languages",
    description:
      "From immersion to the Pomodoro technique, discover the most effective methods backed by science for mastering any new language.",
    image: "/images/blog-learning-techniques.jpg",
    date: "2026-02-06",
    readTime: "7 min read",
    category: "Tips",
    author: "Aye Sandi Htun",
  },
  {
    id: "daily-english-speaking-practice",
    title: "Daily English Speaking Practice Tips",
    description:
      "Build a simple daily routine to practice English speaking, even if you do not have a conversation partner. These solo techniques really work.",
    image: "/images/blog-daily-practice.jpg",
    date: "2026-02-03",
    readTime: "4 min read",
    category: "English",
    author: "Aye Sandi Htun",
  },
  {
    id: "how-to-think-in-english",
    title: "How to Think in English",
    description:
      "Stop translating in your head and start thinking directly in English. This guide shows you practical steps to make the mental switch.",
    image: "/images/blog-think-in-english.jpg",
    date: "2026-01-30",
    readTime: "6 min read",
    category: "English",
    author: "Aye Sandi Htun",
  },
  // ---- KOREAN BLOG POSTS ----
  {
    id: "common-korean-phrases-beginners",
    title: "Common Korean Phrases for Beginners",
    description:
      "Start speaking Korean from day one with these essential phrases covering greetings, apologies, and everyday expressions.",
    image: "/images/blog-korean-phrases.jpg",
    date: "2026-02-10",
    readTime: "4 min read",
    category: "Korean",
    author: "Aye Sandi Htun",
  },
  {
    id: "korean-pronunciation-guide",
    title: "Korean Pronunciation Guide",
    description:
      "Master the sounds of the Korean language. Learn how to pronounce consonants, vowels, and tricky sound combinations correctly.",
    image: "/images/blog-korean-pronunciation.jpg",
    date: "2026-02-07",
    readTime: "5 min read",
    category: "Korean",
    author: "Aye Sandi Htun",
  },
  {
    id: "how-to-practice-korean-conversation",
    title: "How to Practice Korean Conversation",
    description:
      "Find practical ways to practice speaking Korean, from language exchange apps to self-study dialogue techniques you can do alone.",
    image: "/images/blog-korean-conversation.jpg",
    date: "2026-02-04",
    readTime: "5 min read",
    category: "Korean",
    author: "Aye Sandi Htun",
  },
  {
    id: "topik-exam-study-tips",
    title: "TOPIK Exam Study Tips",
    description:
      "Prepare effectively for the TOPIK exam with these study strategies, practice resources, and time management tips from top scorers.",
    image: "/images/blog-topik-tips.jpg",
    date: "2026-02-01",
    readTime: "7 min read",
    category: "Korean",
    author: "Aye Sandi Htun",
  },
  {
    id: "best-korean-learning-resources",
    title: "Best Korean Learning Resources",
    description:
      "A curated list of the best apps, websites, books, and tools to complement your Korean studies and accelerate your progress.",
    image: "/images/blog-korean-resources.jpg",
    date: "2026-01-28",
    readTime: "5 min read",
    category: "Korean",
    author: "Aye Sandi Htun",
  },
  {
    id: "mistakes-beginners-make-korean",
    title: "Mistakes Beginners Make in Korean",
    description:
      "Avoid common pitfalls that trip up Korean learners. From honorific confusion to particle errors, learn how to get it right from the start.",
    image: "/images/blog-korean-mistakes.jpg",
    date: "2026-01-25",
    readTime: "6 min read",
    category: "Korean",
    author: "Aye Sandi Htun",
  },
  // ---- GENERAL ----
  {
    id: "stay-motivated-learning-language",
    title: "How to Stay Motivated While Learning a Language",
    description:
      "Language learning is a marathon, not a sprint. Here are actionable tips to maintain your motivation and reach fluency.",
    image: "/images/blog-motivation.jpg",
    date: "2026-02-05",
    readTime: "6 min read",
    category: "Tips",
    author: "Aye Sandi Htun",
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Min Thu",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
    text: "This platform helped me improve my English speaking quickly! The lessons are well-structured and Sandi explains everything so clearly.",
    course: "English Speaking Mastery",
  },
  {
    id: "r2",
    name: "Hana Kim",
    avatar: "/images/avatar-2.jpg",
    rating: 5,
    text: "Korean lessons are very clear and easy to follow. I went from knowing zero Korean to being able to have basic conversations in just a month!",
    course: "Korean for Beginners",
  },
  {
    id: "r3",
    name: "Zaw Win",
    avatar: "/images/avatar-3.jpg",
    rating: 4,
    text: "The grammar fundamentals course is exactly what I needed. The exercises really helped me understand English tenses better.",
    course: "English Grammar Fundamentals",
  },
  {
    id: "r4",
    name: "Thiri Aung",
    avatar: "/images/avatar-4.jpg",
    rating: 5,
    text: "I love the conversation practice course! It feels like talking to a real Korean friend. Highly recommended for intermediate learners.",
    course: "Korean Conversation Practice",
  },
  {
    id: "r5",
    name: "Kyaw Zin",
    avatar: "/images/avatar-5.jpg",
    rating: 5,
    text: "LearnWithSandi is the best language learning platform I have found. The video quality is excellent and the content is very engaging.",
    course: "English Speaking Mastery",
  },
  {
    id: "r6",
    name: "Su Mon",
    avatar: "/images/avatar-6.jpg",
    rating: 5,
    text: "The instructor explains grammar in a very simple way. I finally understand English tenses after years of confusion. Thank you Sandi!",
    course: "English Grammar Fundamentals",
  },
  {
    id: "r7",
    name: "Aung Ko",
    avatar: "/images/avatar-7.jpg",
    rating: 4,
    text: "I feel more confident speaking English now. The real-world practice scenarios are incredibly helpful for everyday conversations.",
    course: "Advanced English Conversation",
  },
  {
    id: "r8",
    name: "Yuna Park",
    avatar: "/images/avatar-8.jpg",
    rating: 5,
    text: "The TOPIK preparation course is comprehensive and well-organized. I improved my score significantly after completing it.",
    course: "TOPIK Preparation Course",
  },
  {
    id: "r9",
    name: "Htun Htun",
    avatar: "/images/avatar-9.jpg",
    rating: 5,
    text: "Business English course was a game changer for my career. I can now confidently write emails and give presentations in English.",
    course: "Business English Communication",
  },
  {
    id: "r10",
    name: "Myint Myat",
    avatar: "/images/avatar-10.jpg",
    rating: 4,
    text: "The vocabulary builder course uses great techniques. I learned more words in one month than I did in a whole year of self-study.",
    course: "English Vocabulary Builder",
  },
  {
    id: "r11",
    name: "Phyo Wai",
    avatar: "/images/avatar-11.jpg",
    rating: 5,
    text: "Korean Grammar Basics made everything click for me. The particle explanations are the best I have found anywhere online.",
    course: "Korean Grammar Basics",
  },
  {
    id: "r12",
    name: "Ei Ei",
    avatar: "/images/avatar-12.jpg",
    rating: 5,
    text: "I started with the Korean for Beginners course and now I am on the intermediate level. Sandi makes learning so enjoyable and fun!",
    course: "Intermediate Korean Speaking",
  },
];
