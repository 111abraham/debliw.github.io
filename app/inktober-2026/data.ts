export interface InktoberArtwork {
  id: number;
  day: number;
  dayString: string;
  title: string;
  slug: string;
  image: string;
  date: string;
  medium: string;
  tags: string[];
  description: string;
}

export const INKTOBER_ARTWORKS: InktoberArtwork[] = [
  {
    id: 1,
    day: 1,
    dayString: "01",
    title: "Apple",
    slug: "apple",
    image: "/inktober-2026/day-01-apple.jpg",
    date: "October 1, 2026",
    medium: "Ink, Cross-hatching & Digital Tone",
    tags: ["Still Life", "Organic", "Form Study"],
    description: "Opening day of the 2026 ink journey. Exploring weight, texture, and light falloff on organic curvature."
  },
  {
    id: 2,
    day: 2,
    dayString: "02",
    title: "Relic",
    slug: "relic",
    image: "/inktober-2026/day-02-relic.jpg",
    date: "October 2, 2026",
    medium: "Traditional Ink & Shadow Work",
    tags: ["Ancient", "Artifact", "Atmosphere"],
    description: "An ancient talisman carved from weathered stone and forgotten memory, imbued with enduring mystery."
  },
  {
    id: 3,
    day: 3,
    dayString: "03",
    title: "Miniature",
    slug: "miniature",
    image: "/inktober-2026/day-03-miniature.jpg",
    date: "October 3, 2026",
    medium: "Fine Liner & Micro-Detaiing",
    tags: ["Scale", "Intricate", "Character"],
    description: "A compact study in micro-proportions and intricate silhouettes that command attention despite diminutive scale."
  },
  {
    id: 4,
    day: 4,
    dayString: "04",
    title: "Cactus",
    slug: "cactus",
    image: "/inktober-2026/day-04-cactus.jpg",
    date: "October 4, 2026",
    medium: "Line & Stippling",
    tags: ["Flora", "Desert", "Geometry"],
    description: "Spines, ridges, and harsh arid survival. Structural geometry translated into clean organic lines."
  },
  {
    id: 5,
    day: 5,
    dayString: "05",
    title: "Smack",
    slug: "smack",
    image: "/inktober-2026/day-05-smack.jpg",
    date: "October 5, 2026",
    medium: "Dynamic Ink & Motion Accents",
    tags: ["Action", "Impact", "Energy"],
    description: "Capturing instantaneous kinetic collision, shockwaves, and expressive exaggeration in a single frame."
  },
  {
    id: 6,
    day: 6,
    dayString: "06",
    title: "Ogre",
    slug: "ogre",
    image: "/inktober-2026/day-06-ogre.jpg",
    date: "October 6, 2026",
    medium: "Brush Pen & Heavy Inking",
    tags: ["Creature", "Mythology", "Silhouettes"],
    description: "A hulking behemoth emerging from deep shadows. Deep blacks and dramatic rim contrast."
  },
  {
    id: 7,
    day: 7,
    dayString: "07",
    title: "Panic",
    slug: "panic",
    image: "/inktober-2026/day-07-panic.jpg",
    date: "October 7, 2026",
    medium: "Expressive Ink & Kinetic Lines",
    tags: ["Emotion", "Psychology", "Tension"],
    description: "Frenetic strokes portraying high-stakes adrenaline, startled eyes, and sudden visceral disorientation."
  },
  {
    id: 8,
    day: 8,
    dayString: "08",
    title: "Stinky",
    slug: "stinky",
    image: "/inktober-2026/day-08-stinky.jpg",
    date: "October 8, 2026",
    medium: "Character Inking & Comic Stylization",
    tags: ["Humor", "Character", "Whimsical"],
    description: "Playful character design experimenting with comedic gesture, pungent vapors, and exaggerated reaction."
  },
  {
    id: 9,
    day: 9,
    dayString: "09",
    title: "Ram",
    slug: "ram",
    image: "/inktober-2026/day-09-ram.jpg",
    date: "October 9, 2026",
    medium: "Pen & Ink Anatomy",
    tags: ["Wildlife", "Power", "Horn Study"],
    description: "Coiled horns and resolute bone structure. Emphasizing raw charging momentum and tactile spiral density."
  },
  {
    id: 10,
    day: 10,
    dayString: "10",
    title: "Mystical",
    slug: "mystical",
    image: "/inktober-2026/day-10-mystical.jpg",
    date: "October 10, 2026",
    medium: "Ink Wash & Luminous Contrast",
    tags: ["Arcane", "Magic", "Ether"],
    description: "Reaching into ethereal realms where geometry blends with cosmic glow and occult fascination."
  },
  {
    id: 11,
    day: 11,
    dayString: "11",
    title: "Rescue",
    slug: "rescue",
    image: "/inktober-2026/day-11-rescue.jpg",
    date: "October 11, 2026",
    medium: "Sequential Storytelling & Ink",
    tags: ["Narrative", "Courage", "Heroism"],
    description: "A pivotal storytelling scene: reaching hands, tense precipices, and heart-racing salvation."
  },
  {
    id: 12,
    day: 12,
    dayString: "12",
    title: "Toss",
    slug: "toss",
    image: "/inktober-2026/day-12-toss.jpg",
    date: "October 12, 2026",
    medium: "Dynamic Silhouette Inking",
    tags: ["Physics", "Arc", "Motion"],
    description: "The physics of centrifugal arc and release. Frozen right at the apex of rotational momentum."
  },
  {
    id: 13,
    day: 13,
    dayString: "13",
    title: "Flimsy",
    slug: "flimsy",
    image: "/inktober-2026/day-13-flimsy.jpg",
    date: "October 13, 2026",
    medium: "Delicate Line & Structural Tension",
    tags: ["Fragile", "Balance", "Linear"],
    description: "Teetering on the edge of structural collapse. Delicate joints bearing precarious weight."
  },
  {
    id: 14,
    day: 14,
    dayString: "14",
    title: "Lady",
    slug: "lady",
    image: "/inktober-2026/day-14-lady.jpg",
    date: "October 14, 2026",
    medium: "Fine Art Portraiture & Ink",
    tags: ["Portrait", "Elegance", "Contour"],
    description: "Graceful contours and refined gaze. Melding high-fashion silhouette with emotive ink hatchwork."
  },
  {
    id: 15,
    day: 15,
    dayString: "15",
    title: "Hooray",
    slug: "hooray",
    image: "/inktober-2026/day-15-hooray.jpg",
    date: "October 15, 2026",
    medium: "Celebratory Character Ink",
    tags: ["Joy", "Celebration", "Midway"],
    description: "Celebrating the halfway mark of Inktober 2026 with euphoric energy and unrestrained gesture."
  },
  {
    id: 16,
    day: 16,
    dayString: "16",
    title: "Gangly",
    slug: "gangly",
    image: "/inktober-2026/day-16-gangly.jpg",
    date: "October 16, 2026",
    medium: "Elongated Proportion Study",
    tags: ["Proportion", "Anatomy", "Stylized"],
    description: "Exaggerated limbs, knobby joints, and peculiar charm. Pushing the boundaries of organic form."
  },
  {
    id: 17,
    day: 17,
    dayString: "17",
    title: "Contraption",
    slug: "contraption",
    image: "/inktober-2026/day-17-contraption.jpg",
    date: "October 17, 2026",
    medium: "Mechanical Ink & CAD Precision",
    tags: ["Steampunk", "Engineering", "Machine"],
    description: "Gears, linkages, and curious clockwork ingenuity. Celebrating the spirit of experimental mechanics."
  },
  {
    id: 18,
    day: 18,
    dayString: "18",
    title: "Flightless",
    slug: "flightless",
    image: "/inktober-2026/day-18-flightless.jpg",
    date: "October 18, 2026",
    medium: "Poignant Ink Composition",
    tags: ["Avian", "Melancholy", "Flight"],
    description: "Gazing upward toward endless skies. Heavy plumage grounded yet yearning for altitude."
  },
  {
    id: 19,
    day: 19,
    dayString: "19",
    title: "Confused",
    slug: "confused",
    image: "/inktober-2026/day-19-confused.jpg",
    date: "October 19, 2026",
    medium: "Expressive Ink & Symbolism",
    tags: ["Psychology", "Mystery", "Expression"],
    description: "Tangled thoughts and labyrinthine curiosity. Visualizing the internal puzzle of bewilderment."
  },
  {
    id: 20,
    day: 20,
    dayString: "20",
    title: "Lounge",
    slug: "lounge",
    image: "/inktober-2026/day-20-lounge.jpg",
    date: "October 20, 2026",
    medium: "Atmospheric Interior Ink",
    tags: ["Relaxation", "Shadows", "Mood"],
    description: "Sunken cushions, low lamps, and mellow silence. A sanctuary of rest midway through the grind."
  },
  {
    id: 21,
    day: 21,
    dayString: "21",
    title: "Hero",
    slug: "hero",
    image: "/inktober-2026/day-21-hero.jpg",
    date: "October 21, 2026",
    medium: "Monumental Silhouette & Ink",
    tags: ["Valor", "Iconic", "Epic"],
    description: "Standing against the twilight tempest. A study in iconic posture, mantle flow, and unwavering conviction."
  },
  {
    id: 22,
    day: 22,
    dayString: "22",
    title: "Beacon",
    slug: "beacon",
    image: "/inktober-2026/day-22-beacon.jpg",
    date: "October 22, 2026",
    medium: "Chiaroscuro & Ray Inking",
    tags: ["Lighthouse", "Guiding Light", "Hope"],
    description: "Piercing columns of illumination slicing through storm clouds. A lighthouse in obsidian waters."
  },
  {
    id: 23,
    day: 23,
    dayString: "23",
    title: "Dapper",
    slug: "dapper",
    image: "/inktober-2026/day-23-dapper.jpg",
    date: "October 23, 2026",
    medium: "Tailored Cross-hatch & Silhouette",
    tags: ["Style", "Vintage", "Sophisticated"],
    description: "Crisp lapels, sharp fedora, and dapper flair. Vintage debonair charisma rendered in razor-sharp ink."
  },
  {
    id: 24,
    day: 24,
    dayString: "24",
    title: "Bake",
    slug: "bake",
    image: "/inktober-2026/day-24-bake.jpg",
    date: "October 24, 2026",
    medium: "Warm Hatching & Soft Shading",
    tags: ["Culinary", "Warmth", "Comfort"],
    description: "Golden hearth, billowing warmth, and rising loaves. The comforting art of culinary patience."
  },
  {
    id: 25,
    day: 25,
    dayString: "25",
    title: "Fracture",
    slug: "fracture",
    image: "/inktober-2026/day-25-fracture.jpg",
    date: "October 25, 2026",
    medium: "Geometric Shatter & High Contrast",
    tags: ["Abstract", "Crystalline", "Shatter"],
    description: "Fissures tearing through solid rock, revealing subterranean radiance along crystalline faultlines."
  },
  {
    id: 26,
    day: 26,
    dayString: "26",
    title: "Zip",
    slug: "zip",
    image: "/inktober-2026/day-26-zip.jpg",
    date: "October 26, 2026",
    medium: "High-Speed Streak Inking",
    tags: ["Speed", "Trajectory", "Velocity"],
    description: "Pure kinetic blur and neon speed trails tearing across the frame in a blink of motion."
  },
  {
    id: 27,
    day: 27,
    dayString: "27",
    title: "Dumb",
    slug: "dumb",
    image: "/inktober-2026/day-27-dumb.jpg",
    date: "October 27, 2026",
    medium: "Satirical & Caricature Ink",
    tags: ["Humor", "Playful", "Satire"],
    description: "Lighthearted satire and goofy expressionism. Not taking oneself too seriously in the ink lab."
  },
  {
    id: 28,
    day: 28,
    dayString: "28",
    title: "Trophy",
    slug: "trophy",
    image: "/inktober-2026/day-28-trophy.jpg",
    date: "October 28, 2026",
    medium: "Metallic Specular Inking",
    tags: ["Victory", "Gold", "Achievement"],
    description: "Polished brass and gleaming laurels. Rendering metallic specular highlights through deliberate negative space."
  },
  {
    id: 29,
    day: 29,
    dayString: "29",
    title: "Tusk",
    slug: "tusk",
    image: "/inktober-2026/day-29-tusk.jpg",
    date: "October 29, 2026",
    medium: "Primal Cross-Hatching",
    tags: ["Ancient", "Mammoth", "Primal"],
    description: "Sweeping prehistoric curves of ancient mammoths against the frozen Pleistocene tundra."
  },
  {
    id: 30,
    day: 30,
    dayString: "30",
    title: "Cookie",
    slug: "cookie",
    image: "/inktober-2026/day-30-cookie.jpg",
    date: "October 30, 2026",
    medium: "Textured Inking & Crumb Details",
    tags: ["Sweet", "Crisp", "Whimsical"],
    description: "Crumbled edges, melting chocolate chips, and sweet comfort on the penultimate night of the marathon."
  },
  {
    id: 31,
    day: 31,
    dayString: "31",
    title: "Flex",
    slug: "flex",
    image: "/inktober-2026/day-31-flex.jpg",
    date: "October 31, 2026",
    medium: "Anatomical Power & Masterstroke Inking",
    tags: ["Finale", "Triumph", "Strength"],
    description: "The grand finale! 31 of 31 completed. Pure muscular definition, explosive celebration, and creative grit."
  }
];
