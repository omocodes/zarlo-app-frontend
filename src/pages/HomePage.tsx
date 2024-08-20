import landingImage from "../assets/Order now.png";
import partnerImage from "../assets/Collab-pana.png";
import rideImage from "../assets/Take Away-pana.png";
import workImage from "../assets/Beauty salon-rafiki.png";
import giftCardImage from "../assets/Gift card-pana.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  const handleButtonClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight" style={{ color: '#d2a323' }}>
          <b>Transform Your Look, Anytime, Anywhere</b>
        </h1>
        <span className="text-xl">Service is just a tap away!</span>
        <SearchBar
          placeHolder="location"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="flex justify-center">
        <img 
          src={landingImage} 
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl"
          alt="Order now"
        />
      </div>

      {/* New Section with Increased Image Sizes and Rounded Corners */}
      <div className="px-4 py-12 bg-gray-100 w-full rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#ecb92b', fontWeight: '900' }}>Explore Z A R L O</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Partner with ZARLO */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-between">
            <img 
              src={partnerImage} 
              alt="Partner with ZARLO" 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 mx-auto mb-4 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Boost Your Reach</h3>
              <p className="text-gray-700 text-sm mb-4">Join ZARLO and connect with more clients effortlessly. Our platform handles logistics, so you can focus on providing top-notch beauty services.</p>
            </div>
            <button 
              className="bg-yellow-500 text-white py-2 px-4 rounded mt-4 hover:bg-black hover:text-white"
              onClick={() => handleButtonClick('https://forms.gle/your-google-form-url')}
            >
              Get started
            </button>
          </div>

          {/* Join ZARLO as a Beauty Professional */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-between">
            <img 
              src={rideImage} 
              alt="Join ZARLO as a Beauty Professional" 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 mx-auto mb-4 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Join Our Network</h3>
              <p className="text-gray-700 text-sm mb-4">Be part of a growing community of beauty experts. ZARLO offers you a platform to reach new clients and streamline your bookings.</p>
            </div>
            <button 
              className="bg-yellow-500 text-white py-2 px-4 rounded mt-4 hover:bg-black hover:text-white"
              onClick={() => handleButtonClick('https://forms.gle/your-google-form-url')}
            >
              Get started
            </button>
          </div>

          {/* ZARLO for Work */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-between">
            <img 
              src={workImage} 
              alt="ZARLO for Work" 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 mx-auto mb-4 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Beauty on Demand</h3>
              <p className="text-gray-700 text-sm mb-4">Get beauty services or products delivered within an hour, wherever you are. ZARLO brings professional beauty to your doorstep.</p>
            </div>
            <button 
              className="bg-yellow-500 text-white py-2 px-4 rounded mt-4 hover:bg-black hover:text-white"
              onClick={() => handleButtonClick('https://forms.gle/your-google-form-url')}
            >
              Get started
            </button>
          </div>

          {/* ZARLO Gift Cards */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-between">
            <img 
              src={giftCardImage} 
              alt="ZARLO Gift Cards" 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 mx-auto mb-4 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Gift & Earn Rewards</h3>
              <p className="text-gray-700 text-sm mb-4">Give the gift of ZARLO's beauty services with our gift cards. Plus, refer friends and earn rewards for every service they request.</p>
            </div>
            <button 
              className="bg-yellow-500 text-white py-2 px-4 rounded mt-4 hover:bg-black hover:text-white"
              onClick={() => handleButtonClick('https://forms.gle/your-google-form-url')}
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
