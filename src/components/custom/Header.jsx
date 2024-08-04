import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div className="flex justify-between items-center shadow-sm absolute z-10 w-full p-2 px-5 pr-6">
      <h1 className="font-bold text-4xl" onClick={() => navigate("/")}>
        Travelus.
      </h1>

      <div>
        {isAuthenticated ? (
          <div className="flex gap-5 items-center">
            <Button
              className="rounded-full h-9"
              onClick={() => {
                navigate("/create-trip");
              }}
            >
              + New Trip
            </Button>
            <Button
              variant="outline"
              className="rounded-full h-9"
              onClick={() => {
                navigate("/all-trips");
              }}
            >
              All Trips
            </Button>

            <Popover>
              <PopoverTrigger>
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-[38px] h-[38px] rounded-full"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className="cursor-pointer"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  <span className="font-medium">Logout</span>
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => loginWithRedirect()}>Sign In</Button>
        )}
      </div>
    </div>
  );
};

export default Header;
