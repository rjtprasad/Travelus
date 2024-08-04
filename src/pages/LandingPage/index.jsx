import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import beachVid from "../../assets/beachVid.mp4";
import beachPoster from "../../assets/beachPoster.png";

const LandingPage = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        poster={beachPoster}
        autoPlay
        loop
        muted
        preload="ture"
        loading="lazy"
      />

      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/20"></div>

      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 gap-6">
        <h1 className="font-extrabold text-5xl">
          Discover Your Next Adventure With
        </h1>
        <h2 className="font-bold text-5xl ">AI Travel Planner</h2>

        <h3 className="text-xl mt-10">
          Your personal trip planner and travel curator, creating custom
          itineraries tailored to your interests and budget.
        </h3>

        <Link to={"/create-trip"}>
          <div className="pt-12">
            <Button>Get Started</Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
