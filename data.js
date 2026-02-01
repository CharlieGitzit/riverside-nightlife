const venues = [
  {
    name: "The Menagerie",
    category: "club",
    music: ["edm"],
    drinkRange: 12,
    cover: 10,
    food: false,
    availability: "night",
    address: "https://maps.google.com/?q=menagerie+riverside",
    icon: "assets/icons/club.svg",
    bg: "assets/images/club1.jpg",
    dress: "trendy"
  },
  {
    name: "Pixels Bar & Eatery",
    category: "bar",
    music: ["mixed", "pop", "rock", "electronic"],
    drinkRange: 8,
    cover: 0,
    food: true,
    availability: "evening",
    address: "https://maps.google.com/?q=pixels+riverside",
    icon: "assets/icons/bar.svg",
    bg: "assets/images/bar1.jpg",
    dress: "casual"
  },
  {
    name: "ProAbition Lounge",
    category: "lounge",
    music: ["hip hop", "rap", "r&b"],
    drinkRange: 14,
    cover: 15,
    food: true,
    availability: "night",
    address: "https://maps.google.com/?q=proabition+riverside",
    icon: "assets/icons/lounge.svg",
    bg: "assets/images/lounge1.jpg",
    dress: "dressy"
  }
];

const alternatives = [
  {
    name: "Late Night Food Crawl",
    type: "food",
    description: "Explore Riverside's best late-night eateries with a variety of cuisines.",
    link: "https://maps.google.com/?q=food+riverside",
    icon: "assets/icons/food.svg",
    bg: "assets/images/food_night.jpg"
  },
  {
    name: "Downtown Night Walk",
    type: "activity",
    description: "Enjoy a safe and scenic walk through downtown Riverside’s glowing nightlife.",
    link: "https://maps.google.com/?q=downtown+riverside",
    icon: "assets/icons/activity.svg",
    bg: "assets/images/downtown_walk.jpg"
  }
];

const questions = [
  "Which area of Riverside are you in? (e.g., Downtown, Riverside Heights)",
  "Do you prefer a club, bar, or lounge?",
  "What kind of music do you enjoy? (e.g., EDM, hip hop, mixed)",
  "What's your maximum drink budget in dollars?",
  "Would you like food options available? (yes/no)"
];

