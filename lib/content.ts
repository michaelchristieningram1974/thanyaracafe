// Site content — plain code, no CMS. Edit this file directly to change
// menu items, prices, or copy. Photos live in /public/menu/.

export interface MenuItem {
  id: string;
  name: string;
  nameThai: string;
  description: string;
  price: number; // THB
  category: string;
  image?: string;
}

export interface SiteSettings {
  name: string;
  nameThai: string;
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
  nameThai: "ธัญญารา คาเฟ่",
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
  "Spicy Salads",
  "Papaya Salads",
  "Fried Items",
  "Single Dishes",
  "Stir-Fried Dishes",
  "Soup Dishes",
  "Grilled Dishes",
];

// Short Thai label shown in the round category badge.
export const categoryThai: Record<string, string> = {
  "Spicy Salads": "ยำ",
  "Papaya Salads": "ตำ",
  "Fried Items": "ทอด",
  "Single Dishes": "จาน",
  "Stir-Fried Dishes": "ผัด",
  "Soup Dishes": "ต้ม",
  "Grilled Dishes": "ย่าง",
};

export const menuItems: MenuItem[] = [
  // Spicy Salads (ยำ)
  {
    id: "yum-woon-sen-moo",
    name: "Spicy Glass Noodle Salad with Minced Pork",
    nameThai: "ยำวุ้นเส้นหมูสับ",
    description: "Glass noodles tossed with minced pork, chili, and lime in a spicy dressing.",
    price: 99,
    category: "Spicy Salads",
  },
  {
    id: "yum-woon-sen-talay",
    name: "Spicy Glass Noodle Salad with Mixed Seafood",
    nameThai: "ยำวุ้นเส้นรวมมิตรทะเล",
    description: "Glass noodles tossed with shrimp, squid, and mussels in a spicy lime dressing.",
    price: 120,
    category: "Spicy Salads",
  },
  {
    id: "yum-ruammit",
    name: "Mixed Seafood Salad",
    nameThai: "ยำรวมมิตร",
    description: "Shrimp, squid, and herbs tossed in a spicy Thai seafood salad dressing.",
    price: 120,
    category: "Spicy Salads",
  },
  // Papaya Salads (ตำ)
  {
    id: "tam-thai",
    name: "Thai Papaya Salad",
    nameThai: "ตำไทย",
    description: "Shredded green papaya pounded with tomato, long bean, dried shrimp, and peanuts.",
    price: 59,
    category: "Papaya Salads",
  },
  {
    id: "tam-lao",
    name: "Laos Papaya Salad",
    nameThai: "ตำลาว",
    description: "A saltier, more pungent style of papaya salad made with fermented fish sauce.",
    price: 59,
    category: "Papaya Salads",
  },
  {
    id: "tam-poo-pla-ra",
    name: "Papaya Salad with Salted Crab",
    nameThai: "ตำปูปลาร้า",
    description: "Papaya salad with salted crab and fermented fish sauce for a bold, savory kick.",
    price: 69,
    category: "Papaya Salads",
  },
  // Fried Items (ทอด)
  {
    id: "french-fries",
    name: "French Fries",
    nameThai: "เฟรนฟราย",
    description: "Crispy golden fries served with ketchup.",
    price: 89,
    category: "Fried Items",
  },
  {
    id: "chicken-nuggets",
    name: "Chicken Nuggets",
    nameThai: "นักเก็ตไก่",
    description: "Breaded chicken nuggets served with ketchup.",
    price: 89,
    category: "Fried Items",
  },
  {
    id: "fried-chicken-cartilage",
    name: "Fried Chicken Cartilage",
    nameThai: "เอ็นไก่ทอด",
    description: "Crunchy deep-fried chicken cartilage, a popular Thai snack.",
    price: 99,
    category: "Fried Items",
  },
  // Single Dishes (จาน)
  {
    id: "kra-pao-moo-gai",
    name: "Basil Pork / Chicken",
    nameThai: "กะเพราหมู,ไก่",
    description: "Stir-fried minced pork or chicken with holy basil and chili, topped with a fried egg, served over rice.",
    price: 59,
    category: "Single Dishes",
  },
  {
    id: "kra-pao-talay",
    name: "Basil Seafood / Squid / Shrimp",
    nameThai: "กะเพราทะเล,ปลาหมึก,กุ้ง",
    description: "Stir-fried mixed seafood with holy basil and chili, topped with a fried egg, served over rice.",
    price: 79,
    category: "Single Dishes",
  },
  {
    id: "pad-cha-moo-gai",
    name: "Spicy Herb Stir-Fry Pork / Chicken",
    nameThai: "ผัดฉ่าหมู,ไก่",
    description: "Pork or chicken stir-fried with Thai herbs and spices, served over rice.",
    price: 79,
    category: "Single Dishes",
  },
  // Stir-Fried Dishes (ผัด)
  {
    id: "pad-pak-boong",
    name: "Stir-Fried Morning Glory with Oyster Sauce",
    nameThai: "ผักบุ้งไฟแดง",
    description: "Morning glory quickly stir-fried with garlic, chili, and oyster sauce.",
    price: 79,
    category: "Stir-Fried Dishes",
  },
  {
    id: "pad-pong-kari-moo-gai",
    name: "Stir-Fried Pork or Chicken with Yellow Curry",
    nameThai: "ผัดผงกะหรี่หมู,ไก่",
    description: "Pork or chicken stir-fried with egg and yellow curry powder.",
    price: 99,
    category: "Stir-Fried Dishes",
  },
  {
    id: "pad-pong-kari-talay",
    name: "Stir-Fried Seafood with Yellow Curry",
    nameThai: "ผัดผงกะหรี่ทะเล,ปลาหมึก,กุ้ง",
    description: "Mixed seafood stir-fried with egg and yellow curry powder.",
    price: 120,
    category: "Stir-Fried Dishes",
  },
  // Soup Dishes (ต้ม)
  {
    id: "tom-yum-moo-gai-pla",
    name: "Tom Yum (Creamy/Clear) Pork, Chicken or Fish",
    nameThai: "ต้มยำน้ำข้น,น้ำใส หมู,ไก่,ปลา",
    description: "Hot and sour soup with pork, chicken, or fish, in a creamy or clear broth.",
    price: 99,
    category: "Soup Dishes",
  },
  {
    id: "tom-yum-talay",
    name: "Tom Yum (Creamy/Clear) Seafood, Squid, Shrimp",
    nameThai: "ต้มยำน้ำข้น,น้ำใส ทะเล,ปลาหมึก,กุ้ง",
    description: "Hot and sour soup with mixed seafood, in a creamy or clear broth.",
    price: 120,
    category: "Soup Dishes",
  },
  // Grilled Dishes (ย่าง)
  {
    id: "kho-moo-yang",
    name: "Grilled Pork Neck",
    nameThai: "คอหมูย่าง",
    description: "Grilled marinated pork neck, sliced and served with a spicy dipping sauce.",
    price: 120,
    category: "Grilled Dishes",
  },
];
