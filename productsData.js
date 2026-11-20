/**
 * =========================================================================
 * PRO TOOLS AI (proaitools.shop) - PRODUCTS & TOOLS CATALOG
 * Data Model sourced and expanded from skytools.shop
 * =========================================================================
 */

const PRODUCTS_DATA = [
  // ==========================================
  // AI & WRITING TOOLS
  // ==========================================
  {
    id: "chatgpt-plus",
    title: "ChatGPT Plus (GPT-4o & Canvas)",
    category: "ai",
    brandColor: "#10a37f",
    badge: "Most Popular",
    badgeType: "hot",
    originalPrice: 20.00,
    price: 7.99,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 7.99 },
      { label: "3 Months", price: 21.99 },
      { label: "6 Months", price: 39.99 }
    ],
    rating: 4.9,
    reviewsCount: 1420,
    shortDesc: "Official GPT-4o, OpenAI o1-preview, Canvas coding editor, DALL-E 3 image generation, and web browsing.",
    features: [
      "Full GPT-4o & o1-preview reasoning models",
      "Unlimited Canvas interactive coding & writing",
      "DALL-E 3 high-res image generation",
      "Code Interpreter & Advanced Data Analysis",
      "Dedicated Private Workspace Profile",
      "Full Replacement Warranty for 30 Days"
    ],
    activationType: "Private Slot / Instant Login Credentials",
    deliveryTime: "Instant (5-10 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-emerald-400"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7466-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813v6.7227zm1.145-2.0838l2.55-1.4722 2.55 1.4722v2.9443l-2.55 1.4722-2.55-1.4722z"/></svg>`
  },
  {
    id: "claude-pro",
    title: "Claude Pro (Sonnet 3.5 & Artifacts)",
    category: "ai",
    brandColor: "#d97706",
    badge: "Trending #1",
    badgeType: "trend",
    originalPrice: 20.00,
    price: 8.99,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 8.99 },
      { label: "3 Months", price: 24.99 }
    ],
    rating: 4.95,
    reviewsCount: 980,
    shortDesc: "Anthropic's flagship Claude 3.5 Sonnet & Opus with interactive Artifacts, code generation, and 200K token context.",
    features: [
      "Access to Claude 3.5 Sonnet (Latest model)",
      "Live interactive Artifacts for React, HTML, Diagrams",
      "5x more usage limits than free accounts",
      "200K context window for massive documents & codebases",
      "Private workspace credentials",
      "30-day instant replacement guarantee"
    ],
    activationType: "Private Slot / Dedicated Account",
    deliveryTime: "Instant (5-15 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-amber-500"><path d="M17.472 4.22c-.628 0-1.176.294-1.52.753a3.528 3.528 0 0 0-2.952-1.6c-1.393 0-2.592.812-3.167 1.986A3.666 3.666 0 0 0 7.88 4.67c-2.032 0-3.68 1.648-3.68 3.68 0 .493.104.96.284 1.39A3.81 3.81 0 0 0 3.2 13.25c0 2.106 1.71 3.816 3.816 3.816.51 0 .993-.105 1.436-.288a4.195 4.195 0 0 0 3.548 2.052c1.785 0 3.3-1.11 3.896-2.693.44.156.913.243 1.408.243 2.106 0 3.816-1.71 3.816-3.816 0-.84-.277-1.614-.741-2.24.464-.627.741-1.401.741-2.24 0-2.106-1.71-3.816-3.816-3.816-.145 0-.287.012-.426.03a3.565 3.565 0 0 0-1.89-1.89z"/></svg>`
  },
  {
    id: "perplexity-pro",
    title: "Perplexity Pro (AI Research Engine)",
    category: "ai",
    brandColor: "#06b6d4",
    badge: "Researcher Pick",
    badgeType: "cool",
    originalPrice: 20.00,
    price: 6.49,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 6.49 },
      { label: "1 Year", price: 54.99 }
    ],
    rating: 4.88,
    reviewsCount: 640,
    shortDesc: "Unlimited Pro Search with real-time web citations, toggle between GPT-4o, Claude 3.5 Sonnet, and Sonar Large.",
    features: [
      "Switch between Claude 3.5, GPT-4o & Sonar models",
      "Unlimited Pro Search queries with live web sources",
      "Unlimited file upload & PDF analysis",
      "$5/month API credits included",
      "Private account invitation / Direct access"
    ],
    activationType: "Private Invite / Slot",
    deliveryTime: "Instant (5-15 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-cyan-400"><path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm6 14.5l-6 3-6-3V7.5l6-3 6 3v9z"/><path d="M12 6.5l4 2v7l-4 2-4-2v-7l4-2z"/></svg>`
  },
  {
    id: "midjourney-pro",
    title: "Midjourney v6.1 Pro (Stealth Mode)",
    category: "ai",
    brandColor: "#8b5cf6",
    badge: "Creator Favorite",
    badgeType: "purple",
    originalPrice: 30.00,
    price: 11.99,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 11.99 },
      { label: "3 Months", price: 31.99 }
    ],
    rating: 4.96,
    reviewsCount: 1180,
    shortDesc: "Photorealistic AI art generation v6.1 with Fast GPU hours, web interface access, and private prompt generation.",
    features: [
      "Midjourney v6.1 latest photorealistic engine",
      "Fast GPU rendering hours enabled",
      "Web alpha interface & Discord access",
      "Commercial usage rights for generated artwork",
      "Private channel generation"
    ],
    activationType: "Discord Shared Bot / Private Server Slot",
    deliveryTime: "Instant (10-20 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-purple-400"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`
  },
  {
    id: "elevenlabs-pro",
    title: "ElevenLabs Pro (Voice AI & Cloning)",
    category: "ai",
    brandColor: "#ec4899",
    badge: "Top Voice AI",
    badgeType: "pink",
    originalPrice: 22.00,
    price: 9.99,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 9.99 },
      { label: "3 Months", price: 26.99 }
    ],
    rating: 4.92,
    reviewsCount: 520,
    shortDesc: "Human-grade hyper-realistic AI text-to-speech, instant voice cloning, dubbing studio, and 29+ languages.",
    features: [
      "100,000 text-to-speech characters monthly",
      "Instant voice cloning from 1-minute audio",
      "Commercial license for YouTube, Ads & Audiobooks",
      "AI Dubbing studio with speech-to-speech translation",
      "High quality 44.1kHz audio downloads"
    ],
    activationType: "Dedicated Account / Shared Seat",
    deliveryTime: "Instant (5-15 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-pink-500"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>`
  },
  {
    id: "grammarly-premium",
    title: "Grammarly Premium (Annual)",
    category: "ai",
    brandColor: "#059669",
    badge: "Essential",
    badgeType: "green",
    originalPrice: 144.00,
    price: 11.99,
    period: "1 Year",
    altPeriods: [
      { label: "1 Year", price: 11.99 },
      { label: "Lifetime Invite", price: 19.99 }
    ],
    rating: 4.89,
    reviewsCount: 2100,
    shortDesc: "Complete grammar, clarity, vocabulary enhancement, plagiarism detector, and integrated AI writing assistant.",
    features: [
      "Full sentence rewrites & clarity suggestions",
      "Tone adjustment for professional and casual emails",
      "Built-in Plagiarism Checker checking billions of web pages",
      "Grammarly GenAI (1000 prompts/mo)",
      "Works in Chrome, Word, Docs, Mac & Windows"
    ],
    activationType: "Personal Email Invite",
    deliveryTime: "Instant (5-10 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-emerald-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`
  },
  {
    id: "quillbot-premium",
    title: "QuillBot Premium (Annual)",
    category: "ai",
    brandColor: "#10b981",
    badge: "Student Pick",
    badgeType: "green",
    originalPrice: 99.95,
    price: 9.49,
    period: "1 Year",
    altPeriods: [
      { label: "1 Year", price: 9.49 }
    ],
    rating: 4.82,
    reviewsCount: 890,
    shortDesc: "Unlimited words paraphraser, 9 distinct rewriting modes, plagiarism checker, summarizer, and co-writer.",
    features: [
      "Unlimited paraphrasing word limits",
      "9 modes: Fluency, Formal, Creative, Academic, etc.",
      "Summarizer for articles & research papers",
      "Plagiarism scanner (20 pages/month)",
      "Instant activation via private credentials"
    ],
    activationType: "Private Slot Credentials",
    deliveryTime: "Instant (5 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-teal-400"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`
  },

  // ==========================================
  // GRAPHIC DESIGN & CREATIVE
  // ==========================================
  {
    id: "canva-pro",
    title: "Canva Pro (1 Year / Lifetime Invite)",
    category: "design",
    brandColor: "#00c4cc",
    badge: "Bestseller",
    badgeType: "hot",
    originalPrice: 119.99,
    price: 12.99,
    period: "1 Year",
    altPeriods: [
      { label: "1 Year", price: 12.99 },
      { label: "Lifetime Seat", price: 18.99 }
    ],
    rating: 4.98,
    reviewsCount: 3400,
    shortDesc: "Upgrade your own personal email to Canva Pro! 100M+ stock assets, Magic Studio AI tools, and 1TB storage.",
    features: [
      "Upgrades YOUR OWN existing Canva account",
      "100M+ premium stock photos, graphics, videos & audio",
      "One-click Background Remover & Magic Eraser",
      "Magic Resize for Instagram, TikTok, YouTube thumbnails",
      "Brand Kit, custom fonts, and 1TB cloud storage",
      "100% Guaranteed 1-Year replacement warranty"
    ],
    activationType: "Official Team Email Invite to your personal account",
    deliveryTime: "Instant (5-10 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-cyan-400"><circle cx="12" cy="12" r="10"/><path d="M14.5 9.5c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5z" fill="#090D16"/><path d="M9.5 9.5c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5z" fill="#090D16"/></svg>`
  },
  {
    id: "adobe-creative-cloud",
    title: "Adobe Creative Cloud All Apps (20+ Apps)",
    category: "design",
    brandColor: "#ff0000",
    badge: "Full Suite",
    badgeType: "red",
    originalPrice: 59.99,
    price: 14.99,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 14.99 },
      { label: "3 Months", price: 39.99 },
      { label: "1 Year", price: 99.99 }
    ],
    rating: 4.94,
    reviewsCount: 1850,
    shortDesc: "Complete 20+ desktop apps: Photoshop, Illustrator, Premiere Pro, After Effects, InDesign, Acrobat Pro & Firefly AI.",
    features: [
      "20+ industry-standard Adobe apps for Win & Mac",
      "Adobe Firefly AI Generative Fill & Neural Filters",
      "Adobe Fonts (20,000+ fonts) & Behance Pro",
      "100GB Adobe Cloud storage",
      "Updates directly through official Adobe Desktop app",
      "Dedicated account with full warranty"
    ],
    activationType: "Private Account / Official Email Seat",
    deliveryTime: "Instant (15-30 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-red-500"><path d="M13.96 4.038h5.922L16.27 19.962h-4.32zM9.998 4.038l3.69 15.924H9.684l-1.28-5.698H5.197l2.87-10.226zM4.118 19.962l-2.078-7.39h3.69l1.455 7.39z"/></svg>`
  },
  {
    id: "figma-professional",
    title: "Figma Professional Suite (Annual)",
    category: "design",
    brandColor: "#f24e1e",
    badge: "UI/UX Essential",
    badgeType: "orange",
    originalPrice: 144.00,
    price: 19.99,
    period: "1 Year",
    altPeriods: [
      { label: "1 Year", price: 19.99 }
    ],
    rating: 4.91,
    reviewsCount: 740,
    shortDesc: "Unlimited version history, shared team component libraries, Dev Mode inspect, and unlimited FigJam boards.",
    features: [
      "Unlimited Figma files and version history",
      "Shared component libraries & design systems",
      "Full Figma Dev Mode with code generation",
      "Unlimited FigJam whiteboards for team brainstorming",
      "Invite directly to your personal email"
    ],
    activationType: "Team Seat Invitation",
    deliveryTime: "Instant (10-15 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-orange-500"><path d="M8 2a4 4 0 0 0 0 8h4V2H8zm8 4a4 4 0 1 0-4 4V2a4 4 0 0 1 4 4zM8 10a4 4 0 0 0 0 8h4v-8H8zm8 4a4 4 0 1 0-4 4v-4h4zm-8 4a4 4 0 0 0 4 4v-4H8z"/></svg>`
  },
  {
    id: "envato-elements",
    title: "Envato Elements Unlimited Downloads",
    category: "design",
    brandColor: "#82b541",
    badge: "Unlimited Assets",
    badgeType: "green",
    originalPrice: 33.00,
    price: 8.99,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 8.99 },
      { label: "3 Months", price: 23.99 }
    ],
    rating: 4.87,
    reviewsCount: 1120,
    shortDesc: "Unlimited downloads of stock video, After Effects templates, graphic mockups, royalty-free audio, and WordPress themes.",
    features: [
      "Millions of curated creative digital assets",
      "Stock video clips, music tracks & sound effects",
      "WordPress themes, plugins & template kits",
      "Graphic templates, mockups, fonts & 3D models",
      "Commercial license with every single download",
      "Direct fast download server access"
    ],
    activationType: "Direct Premium Portal Access",
    deliveryTime: "Instant (5 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-lime-400"><path d="M20.24 3.76a1.5 1.5 0 0 0-1.74-.24C16.32 4.67 11.4 8.21 9.4 12.44 8.04 15.34 8.5 18 10.3 19.5c1.8 1.5 4.5 1.5 6.7.2 4-2.4 5.3-9.5 3.24-15.94z"/></svg>`
  },
  {
    id: "freepik-premium",
    title: "Freepik Premium (Vector & AI Suite)",
    category: "design",
    brandColor: "#1d4ed8",
    badge: "Vectors & Stock",
    badgeType: "blue",
    originalPrice: 24.00,
    price: 6.99,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 6.99 },
      { label: "1 Year", price: 39.99 }
    ],
    rating: 4.83,
    reviewsCount: 650,
    shortDesc: "Millions of premium vectors, PSD mockups, AI image generation, icon packs, and stock illustrations.",
    features: [
      "100 downloads per day of premium vectors & PSDs",
      "Full access to Freepik Pikaso AI real-time generator",
      "Flaticon premium icons library included",
      "Commercial usage license included",
      "Fast private browser credentials"
    ],
    activationType: "Private Slot / Direct Access",
    deliveryTime: "Instant (5-10 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-blue-500"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
  },

  // ==========================================
  // VIDEO & AUDIO TOOLS
  // ==========================================
  {
    id: "capcut-pro",
    title: "CapCut Pro (PC, Mac & Mobile)",
    category: "video",
    brandColor: "#000000",
    badge: "TikTok & Shorts",
    badgeType: "hot",
    originalPrice: 19.99,
    price: 5.99,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 5.99 },
      { label: "1 Year", price: 29.99 }
    ],
    rating: 4.96,
    reviewsCount: 2200,
    shortDesc: "Pro AI auto-captions with custom animation styles, vocal isolator, auto-reframe, 4K 60fps watermark-free exports.",
    features: [
      "Animated bilingual Auto-Captions with trending styles",
      "Pro AI video effects, body tracking & green screen",
      "Vocal isolator & AI audio noise reduction",
      "Export 4K 60FPS video with zero watermark",
      "Works on PC, Mac, iPhone, and Android"
    ],
    activationType: "Private Slot / Scan QR Login",
    deliveryTime: "Instant (5-10 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white"><path d="M18.8 6.2c-.4-.4-1-.4-1.4 0L12 11.6 6.6 6.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L10.6 13l-5.4 5.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l5.4-5.4 5.4 5.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 13l5.4-5.4c.4-.4.4-1 0-1.4z"/></svg>`
  },
  {
    id: "runway-gen3",
    title: "Runway Gen-3 Alpha (AI Video)",
    category: "video",
    brandColor: "#7c3aed",
    badge: "Next-Gen AI",
    badgeType: "purple",
    originalPrice: 35.00,
    price: 13.99,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 13.99 }
    ],
    rating: 4.9,
    reviewsCount: 480,
    shortDesc: "Hollywood-grade text-to-video and image-to-video generation with Gen-3 Alpha, motion brushes, and camera direction.",
    features: [
      "Access to latest Runway Gen-3 Alpha engine",
      "Text-to-Video & Image-to-Video high resolution",
      "Motion Brush with 5 multi-directional movement layers",
      "Camera control: Pan, Zoom, Orbit, and Roll",
      "Fast cloud credits with commercial license"
    ],
    activationType: "Shared Account Slot / Private Login",
    deliveryTime: "Instant (15-20 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-violet-400"><polygon points="5 3 19 12 5 21 5 3"/></svg>`
  },
  {
    id: "descript-pro",
    title: "Descript Pro (AI Video & Podcast)",
    category: "video",
    brandColor: "#2563eb",
    badge: "Podcast Favorite",
    badgeType: "blue",
    originalPrice: 30.00,
    price: 9.99,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 9.99 }
    ],
    rating: 4.86,
    reviewsCount: 390,
    shortDesc: "Edit video like editing a Word doc. Automated filler word removal ('um', 'uh'), studio sound AI, and eye contact correction.",
    features: [
      "30 hours transcription per month",
      "One-click Filler Word Removal ('um', 'uh', 'you know')",
      "Studio Sound: converts iPhone mic into studio audio",
      "Eye Contact correction AI",
      "4K video export with automated dynamic subtitles"
    ],
    activationType: "Private Slot Credentials",
    deliveryTime: "Instant (10 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-blue-400"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>`
  },

  // ==========================================
  // SEO & DIGITAL MARKETING
  // ==========================================
  {
    id: "semrush-guru",
    title: "Semrush Guru (Full SEO Suite)",
    category: "marketing",
    brandColor: "#ff642d",
    badge: "SEO Powerhouse",
    badgeType: "orange",
    originalPrice: 249.95,
    price: 19.99,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 19.99 },
      { label: "3 Months", price: 52.99 }
    ],
    rating: 4.97,
    reviewsCount: 1650,
    shortDesc: "Complete keyword research, competitor backlink analytics, site audit, rank tracking, and content optimization.",
    features: [
      "Full Guru Plan with historical data & extended limits",
      "Competitor keyword gap & organic traffic analysis",
      "Backlink Audit & Link Building tool",
      "Content Marketing Platform with SEO Writing Assistant",
      "Automated PDF reporting & rank tracker"
    ],
    activationType: "Private Portal / Extension Login",
    deliveryTime: "Instant (5-10 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-orange-400"><path d="M12 2L2 9.5 12 17l10-7.5L12 2zm0 18l-8-6v3l8 6 8-6v-3l-8 6z"/></svg>`
  },
  {
    id: "ahrefs-standard",
    title: "Ahrefs Standard (Backlink & Keyword)",
    category: "marketing",
    brandColor: "#0066ff",
    badge: "Agency Standard",
    badgeType: "blue",
    originalPrice: 199.00,
    price: 21.99,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 21.99 }
    ],
    rating: 4.93,
    reviewsCount: 920,
    shortDesc: "The web's most accurate backlink index. Site Explorer, Keywords Explorer for Google/YouTube/Amazon, and Content Explorer.",
    features: [
      "World's largest active commercial backlink index",
      "Keyword research across 10 search engines",
      "Competitor organic keywords & top performing pages",
      "Batch analysis tool for up to 200 URLs at once",
      "Private gateway with high daily query allowance"
    ],
    activationType: "Direct Portal Access",
    deliveryTime: "Instant (10-15 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-blue-500"><polygon points="12 2 2 22 22 22 12 2"/><circle cx="12" cy="14" r="3" fill="#090D16"/></svg>`
  },
  {
    id: "linkedin-business",
    title: "LinkedIn Premium Business + Learning",
    category: "marketing",
    brandColor: "#0a66c2",
    badge: "Career & B2B",
    badgeType: "blue",
    originalPrice: 79.99,
    price: 18.99,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 18.99 },
      { label: "3 Months", price: 49.99 }
    ],
    rating: 4.88,
    reviewsCount: 780,
    shortDesc: "Unlimited profile browsing in private mode, 15 InMail credits/mo, business growth insights, and 20,000+ LinkedIn Learning courses.",
    features: [
      "Unlimited 'Who's viewed your profile' for last 365 days",
      "15 monthly InMail credits to message any executive",
      "Competitive company insights & employee headcounts",
      "Full access to 20,000+ LinkedIn Learning certifications",
      "Activated directly on your personal LinkedIn profile"
    ],
    activationType: "Official Promotional Redemption Link",
    deliveryTime: "Instant (5-15 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-sky-500"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`
  },

  // ==========================================
  // DEVELOPER & CODING TOOLS
  // ==========================================
  {
    id: "github-copilot",
    title: "GitHub Copilot Business",
    category: "dev",
    brandColor: "#24292e",
    badge: "Developer Must-Have",
    badgeType: "gray",
    originalPrice: 19.00,
    price: 7.99,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 7.99 },
      { label: "1 Year", price: 64.99 }
    ],
    rating: 4.95,
    reviewsCount: 1540,
    shortDesc: "AI pair programmer inside VS Code, JetBrains, and Visual Studio. Auto-complete functions, write unit tests, and Copilot Chat.",
    features: [
      "Copilot Chat powered by Claude 3.5 Sonnet & GPT-4o",
      "Real-time code completion for all programming languages",
      "Automatic unit test generation and docstring writing",
      "Zero training on your private intellectual property",
      "Activated on your personal GitHub username"
    ],
    activationType: "GitHub Organization Team Invite",
    deliveryTime: "Instant (5-10 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>`
  },
  {
    id: "cursor-pro",
    title: "Cursor Pro (AI Code Editor)",
    category: "dev",
    brandColor: "#38bdf8",
    badge: "Trending Coder",
    badgeType: "cool",
    originalPrice: 20.00,
    price: 8.99,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 8.99 },
      { label: "3 Months", price: 24.99 }
    ],
    rating: 4.96,
    reviewsCount: 880,
    shortDesc: "The lightning-fast fork of VS Code built for AI coding. Composer multi-file editing, codebase indexing, and unlimited fast requests.",
    features: [
      "500 fast premium requests per month (Sonnet 3.5 / GPT-4o)",
      "Composer: build full features across 10+ files at once",
      "Full codebase semantic indexing & embeddings",
      "One-click migration from existing VS Code setup",
      "Dedicated account with full replacement warranty"
    ],
    activationType: "Private Slot Credentials",
    deliveryTime: "Instant (5-10 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-sky-400"><path d="M13.6 21.8L9.2 14.5 4.8 21.8 2 20.2l6-9.9L2 2.2 4.8.6l4.4 7.3 4.4-7.3 2.8 1.6-6 8.1 6 9.9z"/></svg>`
  },
  {
    id: "jetbrains-pack",
    title: "JetBrains All Products Pack (Annual)",
    category: "dev",
    brandColor: "#000000",
    badge: "Ultimate IDE",
    badgeType: "purple",
    originalPrice: 289.00,
    price: 29.99,
    period: "1 Year",
    altPeriods: [
      { label: "1 Year", price: 29.99 }
    ],
    rating: 4.92,
    reviewsCount: 610,
    shortDesc: "IntelliJ IDEA Ultimate, PyCharm Pro, WebStorm, PhpStorm, Rider, GoLand, DataGrip, CLion & ReSharper.",
    features: [
      "Access to all 16 JetBrains professional desktop IDEs",
      "IntelliJ IDEA Ultimate, WebStorm, PyCharm, PhpStorm",
      "Full offline license code or account activation",
      "Cross-platform support for Mac, Windows & Linux",
      "Full 1-Year guaranteed replacement warranty"
    ],
    activationType: "Official License Code / Account Activation",
    deliveryTime: "Instant (15 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-pink-400"><rect x="3" y="3" width="18" height="18" rx="3" fill="#000"/><path d="M6 16h4v2H6zm0-8h7v2H6zm0 4h10v2H6z" fill="#FFF"/></svg>`
  },
  {
    id: "ms-365",
    title: "Microsoft 365 + 1TB OneDrive (Annual)",
    category: "marketing",
    brandColor: "#0078d4",
    badge: "Office Suite",
    badgeType: "blue",
    originalPrice: 99.99,
    price: 14.99,
    period: "1 Year",
    altPeriods: [
      { label: "1 Year", price: 14.99 },
      { label: "Lifetime Seat", price: 24.99 }
    ],
    rating: 4.94,
    reviewsCount: 2800,
    shortDesc: "Word, Excel, PowerPoint, Outlook, OneNote on 5 devices (PC, Mac, iPhone, iPad, Android) with 1000GB OneDrive cloud backup.",
    features: [
      "Install on up to 5 devices simultaneously per user",
      "Full desktop apps: Word, Excel, PowerPoint, Outlook",
      "1,000 GB (1 TB) secure OneDrive cloud storage",
      "Always updated to latest Microsoft 365 features",
      "Personal dedicated account with direct Microsoft login"
    ],
    activationType: "Private Account Credentials",
    deliveryTime: "Instant (5-10 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-blue-500"><rect x="3" y="3" width="8" height="8" fill="#F25022"/><rect x="13" y="3" width="8" height="8" fill="#7FBA00"/><rect x="3" y="13" width="8" height="8" fill="#00A4EF"/><rect x="13" y="13" width="8" height="8" fill="#FFB900"/></svg>`
  },

  // ==========================================
  // MEGA SUPER SAVER BUNDLES
  // ==========================================
  {
    id: "bundle-ultimate-ai",
    title: "Ultimate AI Creator Pack (4-in-1)",
    category: "bundles",
    brandColor: "#8b5cf6",
    badge: "Save 78%",
    badgeType: "bundle",
    originalPrice: 92.00,
    price: 24.99,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 24.99 },
      { label: "3 Months", price: 67.99 }
    ],
    rating: 4.99,
    reviewsCount: 940,
    shortDesc: "The ultimate artificial intelligence stack: ChatGPT Plus (GPT-4o) + Claude Pro (Sonnet 3.5) + Midjourney v6.1 + ElevenLabs Pro.",
    features: [
      "ChatGPT Plus: GPT-4o, Canvas, o1-preview & DALL-E 3",
      "Claude Pro: Sonnet 3.5 Artifacts & 200k context window",
      "Midjourney v6.1: Photorealistic fast GPU rendering",
      "ElevenLabs Pro: 100k characters & voice cloning",
      "Combined value over $92/month for just $24.99",
      "Single consolidated delivery package + VIP priority support"
    ],
    includedTools: ["ChatGPT Plus", "Claude Pro", "Midjourney v6.1", "ElevenLabs Pro"],
    activationType: "Consolidated Credentials Package",
    deliveryTime: "Instant (15-30 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-fuchsia-400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
  },
  {
    id: "bundle-designer-suite",
    title: "Agency Designer Mega Suite (4-in-1)",
    category: "bundles",
    brandColor: "#06b6d4",
    badge: "Save 86%",
    badgeType: "bundle",
    originalPrice: 250.00,
    price: 34.99,
    period: "1 Month Suite",
    altPeriods: [
      { label: "1 Month Suite", price: 34.99 },
      { label: "3 Months Suite", price: 89.99 }
    ],
    rating: 4.98,
    reviewsCount: 710,
    shortDesc: "Adobe Creative Cloud All Apps + Canva Pro (1 Year) + Figma Professional + Envato Elements Unlimited.",
    features: [
      "Adobe All Apps: 20+ desktop creative powerhouses",
      "Canva Pro: 1-Year team invite on your personal email",
      "Figma Pro: Unlimited team design systems & Dev Mode",
      "Envato Elements: Millions of unlimited video & audio downloads",
      "Zero creative bottlenecks for freelancers and digital agencies",
      "Full warranty with instant replacement on any item"
    ],
    includedTools: ["Adobe All Apps", "Canva Pro", "Figma Pro", "Envato Elements"],
    activationType: "Complete Creative Suite Bundle",
    deliveryTime: "Instant (15-30 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-cyan-400"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 20.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l2.69-.62C9.93 21.26 10.93 21.5 12 21.5c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16.5c-4.14 0-7.5-3.36-7.5-7.5S7.86 4.5 12 4.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z"/></svg>`
  },
  {
    id: "bundle-seo-growth",
    title: "SEO & Growth Hacker Suite (3-in-1)",
    category: "bundles",
    brandColor: "#f59e0b",
    badge: "Save 91%",
    badgeType: "bundle",
    originalPrice: 460.00,
    price: 38.99,
    period: "1 Month",
    altPeriods: [
      { label: "1 Month", price: 38.99 }
    ],
    rating: 4.96,
    reviewsCount: 530,
    shortDesc: "Semrush Guru + Ahrefs Standard + Grammarly Premium (1 Year). The undisputed growth stack for organic traffic domination.",
    features: [
      "Semrush Guru: Full historical keyword & competitive research",
      "Ahrefs Standard: Web's cleanest backlink database & explorer",
      "Grammarly Premium: 1-Year personal license for error-free copy",
      "Official agency value exceeds $460/month",
      "Private gateway and dedicated browser extension access"
    ],
    includedTools: ["Semrush Guru", "Ahrefs Standard", "Grammarly Premium"],
    activationType: "SEO Master Pack Login",
    deliveryTime: "Instant (15-20 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-amber-400"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>`
  },
  {
    id: "bundle-dev-powerhouse",
    title: "Full-Stack Dev Powerhouse (3-in-1)",
    category: "bundles",
    brandColor: "#38bdf8",
    badge: "Save 88%",
    badgeType: "bundle",
    originalPrice: 328.00,
    price: 36.99,
    period: "1 Month / 1 Year",
    altPeriods: [
      { label: "1 Month / 1 Year", price: 36.99 }
    ],
    rating: 4.97,
    reviewsCount: 610,
    shortDesc: "GitHub Copilot Business + Cursor Pro + JetBrains All Products Pack (1 Year). Code 10x faster with premier AI tools.",
    features: [
      "GitHub Copilot Business: VS Code & JetBrains integration",
      "Cursor Pro: Composer multi-file AI coding editor",
      "JetBrains All Products: 1-Year license code for 16 IDEs",
      "Full coding autonomy from backend to frontend",
      "Personal activation directly on your developer accounts"
    ],
    includedTools: ["GitHub Copilot", "Cursor Pro", "JetBrains All Pack"],
    activationType: "Dev License & Account Setup",
    deliveryTime: "Instant (15-20 min)",
    logoSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-sky-400"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`
  }
];

// Categories definition
const CATEGORIES = [
  { id: "all", label: "All Tools", icon: "sparkles", count: PRODUCTS_DATA.length },
  { id: "ai", label: "AI & Writing", icon: "bot", count: PRODUCTS_DATA.filter(p => p.category === "ai").length },
  { id: "design", label: "Graphic Design", icon: "palette", count: PRODUCTS_DATA.filter(p => p.category === "design").length },
  { id: "video", label: "Video & Audio", icon: "video", count: PRODUCTS_DATA.filter(p => p.category === "video").length },
  { id: "marketing", label: "SEO & Marketing", icon: "trending-up", count: PRODUCTS_DATA.filter(p => p.category === "marketing").length },
  { id: "dev", label: "Developer Tools", icon: "code", count: PRODUCTS_DATA.filter(p => p.category === "dev").length },
  { id: "bundles", label: "Mega Bundles", icon: "gift", count: PRODUCTS_DATA.filter(p => p.category === "bundles").length }
];

// Customer Testimonials for Infinite Marquee
const TESTIMONIALS = [
  {
    name: "Alex Rivera",
    role: "Full-Stack Dev & Agency Owner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Switched our 6-person agency to the Designer Mega Suite and ChatGPT Plus packages. Saved over $600 this month alone. Credentials arrived in 7 minutes and work flawlessly!",
    tool: "Agency Designer Suite",
    verified: true
  },
  {
    name: "Dr. Sarah Chen",
    role: "AI Researcher & Prompt Engineer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Claude Pro and Perplexity Pro are absolute daily necessities for my paper reviews. The Sonnet 3.5 artifacts work without any throttling. Phenomenal service.",
    tool: "Claude Pro + Perplexity",
    verified: true
  },
  {
    name: "Marcus Sterling",
    role: "Video Creator & YouTuber (450K)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    text: "CapCut Pro 4K auto-captioning and ElevenLabs voice cloning transformed our short-form content workflow. Instant activation and their support responded in 2 minutes.",
    tool: "CapCut Pro + ElevenLabs",
    verified: true
  },
  {
    name: "Elena Rostova",
    role: "UI/UX Product Lead",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Got the 1-year Canva Pro and Figma invite right to my personal email address. No messy account switching. Truly pro grade!",
    tool: "Canva Pro (1 Year)",
    verified: true
  },
  {
    name: "David Kim",
    role: "SEO Consultant & Affiliate Marketer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Semrush Guru and Ahrefs standard accounts are notoriously expensive officially ($450+/mo). Getting access here for under $40 changed the game for my boutique agency.",
    tool: "SEO & Growth Suite",
    verified: true
  },
  {
    name: "Liam O'Connor",
    role: "Software Architect",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Cursor Pro + JetBrains pack running seamlessly. Composer feature cuts my refactoring time in half. Will be renewing every year.",
    tool: "Cursor Pro + JetBrains",
    verified: true
  }
];

// FAQs Data
const FAQS = [
  {
    question: "How does the delivery process work and how fast is it?",
    answer: "Delivery is typically completed within 5 to 15 minutes! Once you confirm your tool selection, our automated system or support team issues your official invitation link or private login credentials directly with complete step-by-step setup guides."
  },
  {
    question: "What is your Full Replacement Warranty guarantee?",
    answer: "Every single tool and subscription purchased through PRO TOOLS AI comes backed by our 100% Replacement Warranty. In the rare event that a seat or workspace experiences any disruption during your active validity term, our 24/7 support team will instantly reset or issue a fresh replacement account within 15 to 30 minutes at zero extra cost."
  },
  {
    question: "Are these private accounts or shared accounts?",
    answer: "We specify the activation type on each tool card. Tools like Canva Pro, Figma, and GitHub Copilot are invited directly to your own personal email address or username. AI tools such as ChatGPT Plus and Claude Pro are delivered as private profile slots or dedicated accounts with full privacy for your chats, files, and prompts."
  },
  {
    question: "How do I place an order?",
    answer: "Browse our catalog, choose your desired duration or bundle, and click 'Order Now'. You can review your tool summary in the Quick View modal. Once our checkout integration is connected, you can confirm via your preferred payment method (PayPal, Cards, Crypto, or WhatsApp direct transfer)."
  },
  {
    question: "Can I renew the same account when my subscription ends?",
    answer: "Yes! 95% of our subscriptions and invites support seamless renewal on the exact same account before your expiration date so you retain all your saved designs, chats, projects, and history without interruption."
  },
  {
    question: "Why are your prices up to 90% cheaper than official retail?",
    answer: "We leverage enterprise bulk agreements, global team seats, developer programs, and regional enterprise licenses. By managing high-volume enterprise pools and passing wholesale discounts directly to freelancers and individual creators, we make elite tools accessible to everyone."
  }
];

// Export to window
if (typeof window !== "undefined") {
  window.PRODUCTS_DATA = PRODUCTS_DATA;
  window.CATEGORIES = CATEGORIES;
  window.TESTIMONIALS = TESTIMONIALS;
  window.FAQS = FAQS;
}
