// src/api.js
const fetchRestaurants = () => {
    return new Promise((resolve) => {
        const restaurantsData = {
            restaurants: [
                {
                    id: 1,
                    name: "Sakura Sushi",
                    cuisine: "Asian",
                    address: "123 Tokyo St, Kyoto, Japan",
                    rating: 4.8,
                    description:
                        "A traditional Japanese restaurant offering fresh sushi and authentic ramen in a cozy setting. Perfect for a genuine Japanese dining experience.",
                    image_url:
                        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    id: 2,
                    name: "Golden Dragon",
                    cuisine: "Asian",
                    address: "456 Beijing Rd, Shanghai, China",
                    rating: 4.6,
                    description:
                        "Experience the rich flavors of China at Golden Dragon, known for its delicious dumplings and classic Kung Pao Chicken. A must-visit for Chinese cuisine lovers.",
                    image_url:
                        "https://images.unsplash.com/photo-1607615765900-947427763e06?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    id: 3,
                    name: "La Bella Italia",
                    cuisine: "Western",
                    address: "789 Rome Ave, Milan, Italy",
                    rating: 4.7,
                    description:
                        "La Bella Italia brings the taste of Italy to your plate with its delightful pizzas and pastas. Enjoy a warm and inviting atmosphere perfect for family dining.",
                    image_url:
                        "https://images.unsplash.com/photo-1533777324565-a040eb52facd?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    id: 4,
                    name: "Burger Bliss",
                    cuisine: "Western",
                    address: "1011 New York Blvd, Los Angeles, USA",
                    rating: 4.5,
                    description:
                        "Burger Bliss offers juicy, gourmet burgers with a variety of toppings in a vibrant, casual setting. Great for a quick, satisfying meal.",
                    image_url:
                        "https://images.unsplash.com/photo-1596649299486-4cdea56fd59d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    id: 5,
                    name: "Sweet Treats",
                    cuisine: "Pastry",
                    address: "1213 Paris St, Paris, France",
                    rating: 4.9,
                    description:
                        "Indulge in exquisite French pastries at Sweet Treats. From buttery croissants to colorful macarons, every bite is a delight.",
                    image_url:
                        "https://images.unsplash.com/photo-1620921592619-652411a0d01a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    id: 6,
                    name: "The Cake Corner",
                    cuisine: "Pastry",
                    address: "1415 Vienna Sq, Vienna, Austria",
                    rating: 4.7,
                    description:
                        "The Cake Corner specializes in traditional Austrian pastries like Sacher Torte and Strudel. A charming spot for dessert lovers.",
                    image_url:
                        "https://images.unsplash.com/photo-1512223792601-592a9809eed4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
            ],
        };
        setTimeout(() => resolve(restaurantsData), 1000); // Simulate a delay
    });
};

export default fetchRestaurants;
