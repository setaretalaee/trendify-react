import IMAGE from './img/mu.jpg';
import music1 from './Music/1.mp3';
import music2 from './Music/2.mp3';
import music3 from './Music/3.mp3';
import music4 from './Music/4.mp3';

const MusicList = () => {
    return (
        <div className="bg-gray-200">
            <div className="relative">
            
                <img
                    src={IMAGE}
                    className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[750px] object-cover border-20 border-white"
                    alt="Trendify"
                />

                <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex justify-start items-start p-4">
                    <div className="bg-opacity-75 p-6 rounded-lg space-y-4">
                        <h2 className="text-2xl bg-gray-800 text-white mb-4">Music List</h2>
                        
                        <div className="space-y-4">
                            <div>
                                <audio controls>
                                    <source src={music1} type="audio/mp3" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                            <div>
                                <audio controls>
                                    <source src={music2} type="audio/mp3" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                            <div>
                                <audio controls>
                                    <source src={music3} type="audio/mp3" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                            <div>
                                <audio controls>
                                    <source src={music4} type="audio/mp3" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicList;
