// Site content — plain code, no CMS. Edit this file directly to change
// menu items, prices, or copy. Photos live in /public/menu/.

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // THB
  category: string;
  image?: string;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  heroText: string;
  aboutTitle: string;
  aboutText: string;
  address: string;
  phone: string;
  email: string;
  hours: { day: string; time: string }[];
}

export const siteSettings: SiteSettings = {
  name: "Thanyara Cafe",
  tagline: "Thai home cooking, made fresh to order",
  heroText:
    "Order ahead from our full menu and pick up when it's ready — no queueing, no fuss.",
  aboutTitle: "Our Story",
  aboutText:
    "Thanyara Cafe serves classic Thai dishes made fresh daily with local ingredients, in a relaxed neighborhood setting.",
  address: "TBC",
  phone: "TBC",
  email: "orders@thanyaracafe.com",
  hours: [
    { day: "Mon – Fri", time: "8:00 – 20:00" },
    { day: "Sat – Sun", time: "9:00 – 21:00" },
  ],
};

export const categories = [
  "Salads",
  "Soups",
  "Noodles & Rice",
  "Curries",
  "Grilled & Appetizers",
  "Desserts & Drinks",
];

export const menuItems: MenuItem[] = [
  {
    id: "som-tam",
    name: "Som Tam",
    description:
      "Shredded green papaya pounded with tomato, long bean, carrot, chili, and lime.",
    price: 80,
    category: "Salads",
  },
  {
    id: "larb-moo",
    name: "Larb Moo",
    description: "Spicy minced pork salad with herbs, lime, and toasted rice powder.",
    price: 90,
    category: "Salads",
  },
  {
    id: "yum-woon-sen",
    name: "Yum Woon Sen",
    description: "Glass noodle salad with pork, shrimp, tomato, and chili-lime dressing.",
    price: 95,
    category: "Salads",
  },
  {
    id: "tom-yum-goong",
    name: "Tom Yum Goong",
    description: "Hot and sour shrimp soup with lemongrass, galangal, and lime leaf.",
    price: 150,
    category: "Soups",
  },
  {
    id: "tom-kha-gai",
    name: "Tom Kha Gai",
    description: "Coconut milk soup with chicken, galangal, and mushrooms.",
    price: 110,
    category: "Soups",
  },
  {
    id: "pad-thai",
    name: "Pad Thai",
    description: "Stir-fried rice noodles with egg, tofu, shrimp, and peanuts.",
    price: 90,
    category: "Noodles & Rice",
  },
  {
    id: "pad-see-ew",
    name: "Pad See Ew",
    description: "Wide rice noodles stir-fried with egg, Chinese broccoli, and dark soy.",
    price: 85,
    category: "Noodles & Rice",
  },
  {
    id: "pad-kra-pao-moo",
    name: "Pad Kra Pao Moo",
    description: "Stir-fried minced pork with holy basil and chili, served over rice.",
    price: 80,
    category: "Noodles & Rice",
  },
  {
    id: "khao-pad",
    name: "Khao Pad",
    description: "Classic Thai fried rice with egg, onion, and your choice of protein.",
    price: 80,
    category: "Noodles & Rice",
  },
  {
    id: "khao-man-gai",
    name: "Khao Man Gai",
    description: "Hainanese-style poached chicken over fragrant rice with ginger sauce.",
    price: 75,
    category: "Noodles & Rice",
  },
  {
    id: "green-curry",
    name: "Green Curry Chicken",
    description: "Coconut green curry with chicken, Thai eggplant, and basil.",
    price: 120,
    category: "Curries",
  },
  {
    id: "massaman-curry",
    name: "Massaman Curry",
    description: "Rich, mild curry with beef, potato, and roasted peanuts.",
    price: 130,
    category: "Curries",
  },
  {
    id: "panang-curry",
    name: "Panang Curry",
    description: "Thick, creamy red curry with pork and kaffir lime leaf.",
    price: 120,
    category: "Curries",
  },
  {
    id: "moo-ping",
    name: "Moo Ping",
    description: "Grilled marinated pork skewers, served with sticky rice.",
    price: 50,
    category: "Grilled & Appetizers",
  },
  {
    id: "gai-yang",
    name: "Gai Yang",
    description: "Thai-style grilled marinated chicken with a tamarind dipping sauce.",
    price: 140,
    category: "Grilled & Appetizers",
  },
  {
    id: "spring-rolls",
    name: "Fresh Spring Rolls",
    description: "Rice paper rolls with shrimp, herbs, and vermicelli, peanut sauce.",
    price: 60,
    category: "Grilled & Appetizers",
  },
  {
    id: "tod-mun-pla",
    name: "Tod Mun Pla",
    description: "Thai fish cakes with green beans and a sweet chili dipping sauce.",
    price: 70,
    category: "Grilled & Appetizers",
  },
  {
    id: "mango-sticky-rice",
    name: "Mango Sticky Rice",
    description: "Sweet sticky rice with fresh mango and coconut cream.",
    price: 90,
    category: "Desserts & Drinks",
  },
  {
    id: "thai-iced-tea",
    name: "Thai Iced Tea",
    description: "Strong black tea with milk, served over ice.",
    price: 45,
    category: "Desserts & Drinks",
  },
  {
    id: "coconut-water",
    name: "Fresh Coconut Water",
    description: "Chilled young coconut, served in the shell.",
    price: 50,
    category: "Desserts & Drinks",
  },
];
