import landingImage from "../assets/Order now.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight" style={{ color: '#d2a323' }}>
             <b>Transform Your Look, Anytime, Anywhere</b>
            </h1>
            <span className="text-xl">Service is just a tap away!</span>
            <SearchBar
          placeHolder="Enter location"
          onSubmit={handleSearchSubmit}
        />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage}/>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-2xl tracking-tighter">
                 <b>Experience the Ultimate Convenience in Grooming!</b>
                </span>
                <span>
                <b>COMING SOON</b><br />Download the ZARLO app for instant grooming services on the go.
                </span>
                <img src={appDownloadImage} />
            </div>
        </div>
    </div>
  )
}

export default HomePage;
