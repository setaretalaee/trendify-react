import IMAGE1 from './img/80.jpg';
import IMAGE2 from './img/81.jpg';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WomenPart = () => {
    const navigate = useNavigate();

    const [tweets, setTweets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [shoes, setShoes] = useState([]);
    const [loadingShoes, setLoadingShoes] = useState(true);
    const [Error, seterror] = useState(null);

    const [dress, setDress] = useState([]);
    const [loadingDress, setLoadingDress] = useState(true);
    const [ErrorDress, setErrorDress] = useState(null);

    const [cartProducts, setCartProducts] = useState(() => {
        const savedCart = sessionStorage.getItem('cartProducts');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        sessionStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }, [cartProducts]);

    useEffect(() => {
        const fetchTweets = async () => {
            try {
                const url = 'https://backend-final-pro.onrender.com/hats';  
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setTweets(data); 
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);  
            } finally {
                setLoading(false); 
            }
        };

        const fetchShoes = async () => {
            try {
                const url = 'https://backend-final-pro.onrender.com/ShoesWomen';
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setShoes(data);
            } catch (Error) {
                console.error('Error fetching data:', Error);
                seterror(Error.message);
            } finally {
                setLoadingShoes(false);
            }
        };

        const fetchDress = async () => {
            try {
                const url = 'https://backend-final-pro.onrender.com/DressWomen';
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setDress(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setErrorDress(error.message);
            } finally {
                setLoadingDress(false);
            }
        };

        fetchTweets();
        fetchShoes();
        fetchDress();
    }, []); 

    const handlClick = (product) => {
        console.log('New Product:', product);
        console.log('Previous Products:', cartProducts);

        const updatedProducts = [...cartProducts, product];

        setCartProducts(updatedProducts);

        navigate('/TrendifyPart/shoppingCart', { state: { products: updatedProducts } });
    };

    

    return (
        <div className="bg-gray-200">
            <div className="bottom-0 w-full flex flex-col space-y-2">
                <div className="h-10 text-white font-bold bg-gradient-to-b from-brown-800 to-brown-200 px-10 py-5">
                    Hat
                </div>
                <div className="flex flex-wrap p-2 bg-gray-800 text-white space-x-4">
                    {loading && <p>Loading...</p>}
                    {error && <p className="text-red-500">Error: {error}</p>}
                    {tweets.length > 0 ? (
                        tweets.map((tweet, index) => (
                            <div key={index} className="w-40 p-2 bg-white rounded-lg shadow-lg space-y-1">
                                <div className="flex flex-col space-y-1">
                                    <h3 className="text-xl font-bold text-black"><p className="text-lg text-gray-800">{tweet.name}</p></h3>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <h3 className="text-xl font-bold text-black">Color : <p className="text-lg text-gray-800">{tweet.color}</p></h3>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-black">Price :<p className="text-lg text-gray-800">{tweet.price}</p></h3>
                                </div>
                                <div className="text-center">
                                    <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300" onClick={() => handlClick(tweet)}>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}
                </div>
            </div>

            <img src={IMAGE2} className="w-full h-[300px]" alt="Trendify" />
            <div className="bottom-0 w-full flex flex-col space-y-2">
                <div className="h-10 text-white font-bold bg-gradient-to-b from-brown-800 to-brown-200 px-10 py-5">
                    Dress
                </div>
                <div className="flex flex-wrap p-2 bg-gray-800 text-white space-x-4">
                    {loadingDress && <p>Loading...</p>}
                    {ErrorDress && <p className="text-red-500">ErrorDress : {ErrorDress}</p>}
                    {dress.length > 0 ? (
                        dress.map((tweet, index) => (
                            <div key={index} className="w-40 p-2 bg-white rounded-lg shadow-lg space-y-1">
                                <div className="flex flex-col space-y-1">
                                    <h3 className="text-xl font-bold text-black"><p className="text-lg text-gray-800">{tweet.name}</p></h3>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <h3 className="text-xl font-bold text-black">Color : <p className="text-lg text-gray-800">{tweet.color}</p></h3>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-black">Price :<p className="text-lg text-gray-800">{tweet.price}</p></h3>
                                </div>
                                <div className="text-center">
                                    <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300" onClick={() => handlClick(tweet)}>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}
                </div>
            </div>
            <img src={IMAGE1} className="w-full h-[300px]" alt="Trendify" />

            <div className="bottom-0 w-full flex flex-col space-y-2">
                <div className="h-10 text-white font-bold bg-gradient-to-b from-brown-800 to-brown-200 px-10 py-5">
                    Shoes
                </div>
                <div className="flex flex-wrap p-2 bg-gray-800 text-white space-x-4">
                    {loadingShoes && <p>Loading...</p>}
                    {Error && <p className="text-red-500">Error: {Error}</p>}
                    {shoes.length > 0 ? (
                        shoes.map((tweet, index) => (
                            <div key={index} className="w-40 p-2 bg-white rounded-lg shadow-lg space-y-1">
                                <div className="flex flex-col space-y-1">
                                    <h3 className="text-xl font-bold text-black"><p className="text-lg text-gray-800">{tweet.name}</p></h3>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <h3 className="text-xl font-bold text-black">Color : <p className="text-lg text-gray-800">{tweet.color}</p></h3>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-black">Price :<p className="text-lg text-gray-800">{tweet.price}</p></h3>
                                </div>
                                <div className="text-center">
                                    <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300" onClick={() => handlClick(tweet)}>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WomenPart;
