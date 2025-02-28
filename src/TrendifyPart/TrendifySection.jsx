
import ABOUT from './aboutPage'
import IMAGE_MODAL from './imageModal'
import MusicList from './MusicList'
import Pages from './page'
import IMAGE from './img/3.jpg'



const TrendifySectio = () => {
  return (
    <div className="bg-gray-200">
      <div className="relative">
        <img
          src={IMAGE}
          className="w-full h-[750px] object-cover"
          alt="Trendify"
        />

        <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-pink-600 to-red-500">
            Welcome to Trendify Shop
          </h1>

        </div>
      </div>
      {<ABOUT />}
      <div className='w-full h-[10px] color-white  bg-black'></div>
      {<IMAGE_MODAL />}
      <div className='w-full h-[30px] '></div>
      {<MusicList />}
      {<Pages />}

    </div>

  );
};

export default TrendifySectio;

