

import { useEffect, useState } from "react";
import Spinner from "../Comps/Spinner";
import Product from "../Comps/Product";

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchData() {
        setLoading(true);

        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setPosts([]);
        }

        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="container mx-auto my-8">
                {loading && <Spinner className="mx-auto" />}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {posts.map((post) => (
                            <Product key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center">
                        {loading ? (
                            <p className="text-xl font-semibold mt-4">Loading...</p>
                        ) : (
                            <div>
                                <p className="text-xl font-semibold mb-4">No posts available</p>
                                <p>Check your internet connection and try again.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
