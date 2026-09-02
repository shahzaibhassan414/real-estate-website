export type Listing = {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  size: string;
  image: string;
};

export const listings: Listing[] = [
  {
    id: "mozang-chungi-13-marla",
    title: "13 Marla House",
    location: "Mozang Chungi, Lahore",
    price: "PKR 2.98 Crore",
    beds: 5,
    baths: 4,
    size: "13 Marla",
    image: "/mazangChungi.webp",
  },
  {
    id: "temple-road-triple-storey",
    title: "Triple Storey House",
    location: "Temple Road, Lahore",
    price: "PKR 75 Lakh",
    beds: 5,
    baths: 5,
    size: "4 Marla",
    image: "/tripleStory.webp",
  },
  {
    id: "bagh-gul-begum-house",
    title: "House",
    location: "Bagh Gul Begum, Fateh Sher Road, Lahore",
    price: "PKR 1.40 Crore",
    beds: 4,
    baths: 3,
    size: "7 Marla",
    image: "/house.webp",
  },
  {
    id: "modern-6-marla-house",
    title: "Modern 6 Marla House",
    location: "Lahore",
    price: "PKR 1.55 Crore",
    beds: 4,
    baths: 3,
    size: "6 Marla",
    image: "/modernhouse.webp",
  },
];
