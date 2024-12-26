const products = {
  products: {
    
    men: [
      {
        id: 1,
        name: "Casual Shirt",
        price: "$30",
        category: "men",
        quantity: [],
        careInstructions: [
          "▸ Machine wash cold on gentle cycle.",
          "▸ Do not bleach; use mild detergent.",
          "▸ Tumble dry on low heat.",
          "▸ Iron on medium setting if needed.",
        ],
        images: [
          "/src/context/men G1 (1).jpeg",
          "/src/context/men G1 (2).webp",
          "/src/context/men G1 (3).webp",
          "/src/context/men G1 (4).jpg"
        ],
      },
      {
        id: 2,
        name: "Acid Washed Hoodie",
        price: "$50",
        category: "men",
        quantity: [],
        careInstructions: [
          "▸ Hand wash cold separately.",
          "▸ Do not bleach.",
          "▸ Lay flat to dry.",
          "▸ Do not iron the printed areas.",
        ],
        images: [
          "/src/context/men G2 (1).jpeg",
          "/src/context/men G2 (2).webp",
          "/src/context/men G2 (3).webp",
          "/src/context/men G2 (4).webp"
        ],
      },
      {
        id: 3,
        name: "Jogging Trousers",
        price: "$40",
        category: "men",
        quantity: [],
        careInstructions: [
          "▸ Machine wash warm with like colors.",
          "▸ Avoid fabric softener.",
          "▸ Tumble dry low.",
          "▸ Do not iron.",
        ],
        images: [
          "/src/context/men G3  (1).jpeg",
          "/src/context/men G3  (2).webp",
          "/src/context/men G3  (3).webp",
          "/src/context/men G3  (4).webp"
        ],
      },
      {
        id: 4,
        name: "Acid Washed T-Shirt",
        price: "$25",
        category: "men",
        quantity: [],
        careInstructions: [
          "▸ Machine wash cold with similar colors.",
          "▸ Do not bleach.",
          "▸ Hang to dry for best results.",
          "▸ Use a warm iron if necessary.",
        ],
        images: [
          "/src/context/men G4 (1).jpeg",
          "/src/context/men G4 (2).webp",
          "/src/context/men G4 (3).webp",
          "/src/context/men G4 (4).webp"
        ],
      },
      {
        id: 5,
        name: "Jogging Trousers",
        price: "$35",
        category: "men",
        quantity: [],
        careInstructions: [
          "▸ Wash inside out in cold water.",
          "▸ Do not bleach.",
          "▸ Tumble dry low.",
          "▸ Avoid ironing directly on the fabric.",
        ],
        images: [
          "/src/context/men G5 (1).jpeg",
          "/src/context/men G5 (2).webp",
          "/src/context/men G5 (3).webp",
          "/src/context/men G5 (4).webp"
        ],
      },
      {
        id: 6,
        name: "Acid Washed T-Shirt",
        price: "$28",
        category: "men",
        quantity: [],
        careInstructions: [
          "▸ Machine wash gentle with mild detergent.",
          "▸ Avoid bleach.",
          "▸ Line dry in the shade.",
          "▸ Cool iron if needed.",
        ],
        images: [
          "/src/context/men G6 (1).jpeg",
          "/src/context/men G6 (2).webp",
          "/src/context/men G6 (3).webp",
          "/src/context/men G6 (4).webp"
        ],
      },
    ],

    women: [
      {
        id: 1,
        name: "Ribbed Knit Trousers",
        price: "$50",
        category: "women",
        quantity: [],
        careInstructions: [
          "▸ Hand wash or use delicate machine cycle.",
          "▸ Hang to dry in shade.",
          "▸ Avoid wringing to maintain shape.",
          "▸ Use a steamer or low-heat iron.",
        ],
        images: [
          "/src/context/women G1 (1).jpeg",
          "/src/context/women G1 (2).webp",
          "/src/context/women G1 (3).webp",
          "/src/context/women G1 (4).jpg",
        ],
      },
      {
        id: 2,
        name: "Oversized Cropped Sweatshirt",
        price: "$55",
        category: "women",
        quantity: [],
        careInstructions: [
          "▸ Machine wash cold on gentle cycle.",
          "▸ Tumble dry on low heat.",
          "▸ Use fabric softener to maintain softness.",
          "▸ Do not bleach.",
        ],
        images: [
          "/src/context/women G2 (1).jpeg",
          "/src/context/women G2 (2).webp",
          "/src/context/women G2 (3).webp",
          "/src/context/women G2 (4).jpg",
        ],
      },
      {
        id: 3,
        name: "Knit Culottes",
        price: "$60",
        category: "women",
        quantity: [],
        careInstructions: [
          "▸ Hand wash cold or use delicate machine cycle.",
          "▸ Lay flat to dry to maintain shape.",
          "▸ Use low-heat iron if necessary.",
          "▸ Avoid bleach.",
        ],
        images: [
          "/src/context/women G3 (1).jpeg",
          "/src/context/women G3 (2).webp",
          "/src/context/women G3 (3).webp",
          "/src/context/women G3 (4).jpg",
        ],
      },
      {
        id: 4,
        name: "Jogging Trousers",
        price: "$45",
        category: "women",
        quantity: [],
        careInstructions: [
          "▸ Machine wash cold with like colors.",
          "▸ Tumble dry on low heat.",
          "▸ Do not iron.",
          "▸ Avoid bleach.",
        ],
        images: [
          "/src/context/women G4 (1).jpeg",
          "/src/context/women G4 (2).webp",
          "/src/context/women G4 (3).webp",
          "/src/context/women G4 (4).jpg",
        ],
      },
      {
        id: 5,
        name: "Scuba Jogging Trousers",
        price: "$65",
        category: "women",
        quantity: [],
        careInstructions: [
          "▸ Machine wash on delicate cycle.",
          "▸ Air dry to prevent shrinking.",
          "▸ Use low heat when ironing.",
          "▸ Do not bleach.",
        ],
        images: [
          "/src/context/women G5 (1).jpeg",
          "/src/context/women G5 (2).webp",
          "/src/context/women G5 (3).webp",
          "/src/context/women G5 (4).jpg",
        ],
      },
      {
        id: 6,
        name: "Ribbed Knit Trousers",
        price: "$50",
        category: "women",
        quantity: [],
        careInstructions: [
          "▸ Hand wash or use delicate machine cycle.",
          "▸ Hang to dry in shade.",
          "▸ Avoid wringing to maintain shape.",
          "▸ Use a steamer or low-heat iron.",
        ],
        images: [
          "/src/context/women G6 (1).jpeg",
          "/src/context/women G6 (2).webp",
          "/src/context/women G6 (3).webp",
          "/src/context/women G6 (4).jpg",
        ],
      },
    ],

    kids: [
      {
        id: "k1-001",
        name: "Embroidered Jacquard Waistcoat",
        price: "$20",
        category: "kids",
        quantity: [],
        careInstructions: [
          "▸ Wash with similar colors in cold water.",
          "▸ Avoid bleach; use a gentle detergent.",
          "▸ Tumble dry on low heat.",
          "▸ Iron inside-out on a medium setting.",
        ],
        images: [
          "/src/context/kids G1 (1).webp",
          "/src/context/kids G1 (2).webp",
          "/src/context/kids G1 (3).webp",
          "/src/context/kids G1 (4).webp"
        ],
      },
      {
        id: "k2-002",
        name: "Embroidered Jacquard Waistcoat",
        price: "$22",
        category: "kids",
        quantity: [],
        careInstructions: [
          "▸ Wash with similar colors in cold water.",
          "▸ Avoid bleach; use a gentle detergent.",
          "▸ Tumble dry on low heat.",
          "▸ Iron inside-out on a medium setting.",
        ],
        images: [
          "/src/context/kids G2 (1).webp",
          "/src/context/kids G2 (2).webp",
          "/src/context/kids G2 (3).webp",
          "/src/context/kids G2 (4).webp",
        ],
      },
      {
        id: "k3-003",
        name: "Dobby Suit",
        price: "$18",
        category: "kids",
        quantity: [],
        careInstructions: [
          "▸ Wash with similar colors in cold water.",
          "▸ Avoid bleach; use a gentle detergent.",
          "▸ Tumble dry on low heat.",
          "▸ Iron inside-out on a medium setting.",
        ],
        images: [
          "/src/context/kids G3 (1).webp",
          "/src/context/kids G3 (2).webp",
          "/src/context/kids G3 (3).webp",
          "/src/context/kids G3 (4).webp",
        ],
      },
      {
        id: "k4-004",
        name: "Cambric Suit",
        price: "$25",
        category: "kids",
        quantity: [],
        careInstructions: [
          "▸ Wash with similar colors in cold water.",
          "▸ Avoid bleach; use a gentle detergent.",
          "▸ Tumble dry on low heat.",
          "▸ Iron inside-out on a medium setting.",
        ],
        images: [
          "/src/context/kids G4 (1).webp",
          "/src/context/kids G4 (2).webp",
          "/src/context/kids G4 (3).webp",
          "/src/context/kids G4 (4).webp",
        ],
      },
      {
        id: "k5-005",
        name: "Dobby Suit",
        price: "$19",
        category: "kids",
        quantity: [],
        careInstructions: [
          "▸ Wash with similar colors in cold water.",
          "▸ Avoid bleach; use a gentle detergent.",
          "▸ Tumble dry on low heat.",
          "▸ Iron inside-out on a medium setting.",
        ],
        images: [
          "/src/context/kids G5 (1).webp",
          "/src/context/kids G5 (2).webp",
          "/src/context/kids G5 (3).webp",
          "/src/context/kids G5 (4).webp",
        ],
      },
      {
        id: "k6-006",
        name: "Dyed Dobby Suit",
        price: "$23",
        category: "kids",
        quantity: [],
        careInstructions: [
          "▸ Wash with similar colors in cold water.",
          "▸ Avoid bleach; use a gentle detergent.",
          "▸ Tumble dry on low heat.",
          "▸ Iron inside-out on a medium setting.",
        ],
        images: [
          "/src/context/kids G6 (1).webp",
          "/src/context/kids G6 (2).webp",
          "/src/context/kids G6 (3).webp",
          "/src/context/kids G6 (4).webp",
        ],
      },
    ],

    scarves: [
      {
        id: 1,
        name: "Cape Shawl",
        price: "$65",
        category: "scarves",
        quantity: [],
        careInstructions: [
          "▸ Clean with a damp cloth or soft brush.",
          "▸ Avoid soaking or machine washing.",
          "▸ Air dry at room temperature.",
          "▸ Use a fabric protector spray for longevity."
        ],
        images: [
          "/src/context/scarf G1 (1).jpeg",
          "/src/context/scarf G1 (2).webp",
          "/src/context/scarf G1 (3).webp",
          "/src/context/scarf G1 (4).webp"
        ],
      },
      {
        id: 2,
        name: "Cape Shawl",
        price: "$70",
        category: "scarves",
        quantity: [],
        careInstructions: [
          "▸ Clean with a damp cloth or soft brush.",
          "▸ Avoid soaking or machine washing.",
          "▸ Air dry at room temperature.",
          "▸ Use a fabric protector spray for longevity."
        ],
        images: [
          "/src/context/scarf G2 (1).jpeg",
          "/src/context/scarf G2 (2).webp",
          "/src/context/scarf G2 (3).webp",
          "/src/context/scarf G2 (4).webp"
        ],
      },
      {
        id: 3,
        name: "Soft Woven Scarf",
        price: "$75",
        category: "scarves",
        quantity: [],
        careInstructions: [
          "▸ Clean with a damp cloth or soft brush.",
          "▸ Avoid soaking or machine washing.",
          "▸ Air dry at room temperature.",
          "▸ Use a fabric protector spray for longevity."
        ],
        images: [
          "/src/context/scarf G3 (1).jpeg",
          "/src/context/scarf G3 (2).webp",
          "/src/context/scarf G3 (3).webp",
          "/src/context/scarf G3 (4).webp"
        ],
      },
      {
        id: 4,
        name: "Cape Shawl",
        price: "$80",
        category: "scarves",
        quantity: [],
        careInstructions: [
          "▸ Clean with a damp cloth or soft brush.",
          "▸ Avoid soaking or machine washing.",
          "▸ Air dry at room temperature.",
          "▸ Use a fabric protector spray for longevity."
        ],
        images: [
          "/src/context/scarf G4 (1).jpeg",
          "/src/context/scarf G4 (2).webp",
          "/src/context/scarf G4 (3).webp",
          "/src/context/scarf G4 (4).webp"
        ],
      },
      {
        id: 5,
        name: "Soft Woven Scarf",
        price: "$85",
        category: "scarves",
        quantity: [],
        careInstructions: [
          "▸ Clean with a damp cloth or soft brush.",
          "▸ Avoid soaking or machine washing.",
          "▸ Air dry at room temperature.",
          "▸ Use a fabric protector spray for longevity."
        ],
        images: [
          "/src/context/scarf G5 (1).jpeg",
          "/src/context/scarf G5 (2).webp",
          "/src/context/scarf G5 (3).webp",
          "/src/context/scarf G5 (4).webp"
        ],
      },
      {
        id: 6,
        name: "Soft Woven Scarf",
        price: "$90",
        category: "scarves",
        quantity: [],
        careInstructions: [
          "▸ Clean with a damp cloth or soft brush.",
          "▸ Avoid soaking or machine washing.",
          "▸ Air dry at room temperature.",
          "▸ Use a fabric protector spray for longevity."
        ],
        images: [
          "/src/context/scarf G6 (1).jpeg",
          "/src/context/scarf G6 (2).webp",
          "/src/context/scarf G6 (3).webp",
          "/src/context/scarf G6 (4).webp"
        ],
      }
    ]

  },
};

export default products;