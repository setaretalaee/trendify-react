import IMAGE from './img/4.webp';

const AboutPage = () => {
  return (
    <div className="bg-gray-200">
      <div className="relative">
        <img
          src={IMAGE}
          className="w-full h-[750px] object-cover border-20 border-white sm:h-[500px] md:h-[600px]"
          alt="Trendify"
        />

        <div className="absolute top-0 left-0 text-white p-10 bg-opacity-50 w-full sm:w-1/2 h-full flex items-center">
          <div className="w-full">
            <h1 className="text-4xl font-bold sm:text-3xl md:text-4xl">
              About Trendify Shopping Dress
            </h1>
            <p className="mt-4 text-lg sm:text-base md:text-lg">
              Trendify offers a unique shopping experience where fashion meets comfort. Our dresses are designed with the latest trends in mind, ensuring that you always stay ahead in the fashion game. Each piece is carefully crafted from high-quality materials, providing both style and durability. Whether you are looking for something elegant for a special event or a casual outfit for everyday wear, Trendify has something for every occasion. With a wide range of sizes, colors, and designs, we make sure that every woman finds the perfect fit that highlights her personality and enhances her confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
