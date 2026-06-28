export const relationshipStatusConfig = {
  title: "Relationship status",
  intro:
    "A tiny, playful section for the people who want to know my vibe before asking the question.",
  currentStatus: {
    id: "open",
    label: "Open to new relationship",
    mood: "available",
    description: "Let’s make something beautiful together.",
  },
  statuses: [
    {
      id: "single",
      label: "Single",
      category: "Solo mode",
      description:
        "Fully in my own world, building, creating, and enjoying the quiet.",
    },
    {
      id: "open",
      label: "Open to new relationship",
      category: "Available",
      description:
        "A little curious, a lot intentional, and open to meaningful connection.",
    },
    {
      id: "taken",
      label: "Taken",
      category: "Committed",
      description:
        "Currently in a chapter that’s all about loyalty, care, and shared energy.",
    },
  ],
} as const;
