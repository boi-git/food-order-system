import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import fetchRestaurants from "../assets/retrieved_data/api.js";
import { Input } from "@/components/ui/input";

const MyComponent = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const getRestaurants = async () => {
            try {
                const data = await fetchRestaurants();
                if (isMounted) {
                    setRestaurants(data.restaurants);
                }
            } catch (err) {
                console.error("Failed to fetch restaurants", err);
            }
        };

        getRestaurants();

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        if (restaurants.length === 0) return;

        const intervalId = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentRestaurantIndex(
                    (prevIndex) => (prevIndex + 1) % restaurants.length
                );
                setFade(false);
            }, 250);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [restaurants]);

    return (
        <div className="flex flex-col md:flex-row w-screen h-screen items-center">
            <div className="w-full md:w-1/2 h-full p-8 flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6">Login</h1>
                <div className="w-full mb-4">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                                className="h-5 w-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998a1 1 0 00-.007-1.758l-8-4a1 1 0 00-.986 0l-8 4a1 1 0 000 1.758zM19 8.118l-7.5 3.75a1 1 0 01-.5.132H9a1 1 0 01-.5-.132L1 8.118V14a2 2 0 002 2h14a2 2 0 002-2V8.118z" />
                            </svg>
                        </span>
                        <Input
                            type="email"
                            placeholder="Email"
                            id="email"
                            className="pl-10"
                        />
                    </div>
                </div>
                <div className="w-full mb-6">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                                className="h-5 w-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5 9V7a5 5 0 1110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm4-2a3 3 0 016 0v2H9V7z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <Input
                            type="password"
                            placeholder="Password"
                            id="password"
                            className="pl-10"
                        />
                    </div>
                </div>
                <Button className="w-full mb-4">Login</Button>
                <Button variant="link" className="w-full text-center">
                    Forgot your password?
                </Button>
            </div>
            <div
                className={`w-full md:w-1/2 h-auto aspect-video md:h-screen transition-opacity duration-500 ease-in-out ${
                    fade ? "opacity-0" : "opacity-100"
                }`}
                style={{
                    backgroundImage:
                        restaurants.length > 0
                            ? `url(${restaurants[currentRestaurantIndex].image_url})`
                            : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="h-full bg-black bg-opacity-50 text-white p-4 flex flex-col justify-end">
                    {restaurants.length > 0 && (
                        <>
                            <h2 className="text-xl font-bold">
                                {restaurants[currentRestaurantIndex].name}
                            </h2>
                            <p>
                                {
                                    restaurants[currentRestaurantIndex]
                                        .description
                                }
                            </p>
                            <p>
                                <strong>Rating:</strong>{" "}
                                {restaurants[currentRestaurantIndex].rating}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
