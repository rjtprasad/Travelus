import { useState, useContext } from "react";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/context";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SignInDialog from "./SignInDialog";

const Header = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const user = useContext(UserContext);

  return (
    <div className="flex justify-between items-center shadow-sm absolute z-10 w-full p-2 px-5 pr-6">
      <h1 className="font-bold text-4xl" onClick={() => navigate("/")}>
        Travelus.
      </h1>

      <div>
        {user.isSignIn ? (
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
                navigate("/prev-trips");
              }}
            >
              My Trips
            </Button>

            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.profileUrl}
                  alt="profile_picture"
                  className="w-[38px] h-[38px] rounded-full"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className="cursor-pointer"
                  onClick={() => {
                    navigate("/");
                    googleLogout();
                    localStorage.clear();
                    user.setIsSignIn(false);
                    user.setProfileUrl(null);
                  }}
                >
                  <span className="font-medium">Logout</span>
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        )}

        <SignInDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
      </div>
    </div>
  );
};

export default Header;
