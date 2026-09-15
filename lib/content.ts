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
  "Desserts & Drinks",
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
  "Desserts & Drinks": "หวาน",
};

export const menuItems: MenuItem[] = [
  {
    id: "som-tam",
    name: "Som Tam",
    nameThai: "ส้มตำ",
    description:
      "Shredded green papaya pounded with tomato, long bean, carrot, chili, and lime.",
    price: 80,
    category: "Papaya Salads",
  },
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
  {
    id: "tom-yum-goong",
    name: "Tom Yum Goong",
    nameThai: "ต้มยำกุ้ง",
    description: "Hot and sour shrimp soup with lemongrass, galangal, and lime leaf.",
    price: 150,
    category: "Soup Dishes",
  },
  {
    id: "tom-kha-gai",
    name: "Tom Kha Gai",
    nameThai: "ต้มข่าไก่",
    description: "Coconut milk soup with chicken, galangal, and mushrooms.",
    price: 110,
    category: "Soup Dishes",
  },
  {
    id: "pad-thai",
    name: "Pad Thai",
    nameThai: "ผัดไทย",
    description: "Stir-fried rice noodles with egg, tofu, shrimp, and peanuts.",
    price: 90,
    category: "Stir-Fried Dishes",
  },
  {
    id: "pad-see-ew",
    name: "Pad See Ew",
    nameThai: "ผัดซีอิ๊ว",
    description: "Wide rice noodles stir-fried with egg, Chinese broccoli, and dark soy.",
    price: 85,
    category: "Stir-Fried Dishes",
  },
  {
    id: "pad-kra-pao-moo",
    name: "Pad Kra Pao Moo",
    nameThai: "ผัดกะเพราหมู",
    description: "Stir-fried minced pork with holy basil and chili, served over rice.",
    price: 80,
    category: "Stir-Fried Dishes",
  },
  {
    id: "khao-pad",
    name: "Khao Pad",
    nameThai: "ข้าวผัด",
    description: "Classic Thai fried rice with egg, onion, and your choice of protein.",
    price: 80,
    category: "Fried Items",
  },
  {
    id: "khao-man-gai",
    name: "Khao Man Gai",
    nameThai: "ข้าวมันไก่",
    description: "Hainanese-style poached chicken over fragrant rice with ginger sauce.",
    price: 75,
    category: "Single Dishes",
  },
  {
    id: "green-curry",
    name: "Green Curry Chicken",
    nameThai: "แกงเขียวหวานไก่",
    description: "Coconut green curry with chicken, Thai eggplant, and basil.",
    price: 120,
    category: "Single Dishes",
  },
  {
    id: "massaman-curry",
    name: "Massaman Curry",
    nameThai: "แกงมัสมั่น",
    description: "Rich, mild curry with beef, potato, and roasted peanuts.",
    price: 130,
    category: "Single Dishes",
  },
  {
    id: "panang-curry",
    name: "Panang Curry",
    nameThai: "พะแนง",
    description: "Thick, creamy red curry with pork and kaffir lime leaf.",
    price: 120,
    category: "Single Dishes",
  },
  {
    id: "moo-ping",
    name: "Moo Ping",
    nameThai: "หมูปิ้ง",
    description: "Grilled marinated pork skewers, served with sticky rice.",
    price: 50,
    category: "Grilled Dishes",
  },
  {
    id: "gai-yang",
    name: "Gai Yang",
    nameThai: "ไก่ย่าง",
    description: "Thai-style grilled marinated chicken with a tamarind dipping sauce.",
    price: 140,
    category: "Grilled Dishes",
  },
  {
    id: "spring-rolls",
    name: "Fresh Spring Rolls",
    nameThai: "ปอเปี๊ยะสด",
    description: "Rice paper rolls with shrimp, herbs, and vermicelli, peanut sauce.",
    price: 60,
    category: "Fried Items",
  },
  {
    id: "tod-mun-pla",
    name: "Tod Mun Pla",
    nameThai: "ทอดมันปลา",
    description: "Thai fish cakes with green beans and a sweet chili dipping sauce.",
    price: 70,
    category: "Fried Items",
  },
  {
    id: "mango-sticky-rice",
    name: "Mango Sticky Rice",
    nameThai: "ข้าวเหนียวมะม่วง",
    description: "Sweet sticky rice with fresh mango and coconut cream.",
    price: 90,
    category: "Desserts & Drinks",
  },
  {
    id: "thai-iced-tea",
    name: "Thai Iced Tea",
    nameThai: "ชาไทยเย็น",
    description: "Strong black tea with milk, served over ice.",
    price: 45,
    category: "Desserts & Drinks",
  },
  {
    id: "coconut-water",
    name: "Fresh Coconut Water",
    nameThai: "น้ำมะพร้าวสด",
    description: "Chilled young coconut, served in the shell.",
    price: 50,
    category: "Desserts & Drinks",
  },
];
