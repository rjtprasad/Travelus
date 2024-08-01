import { useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { getUserProfile } from "../../services/googleSignIn";
import { UserContext } from "@/context";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logo.png";

const SignInDialog = ({ openDialog, setOpenDialog }) => {
  const user = useContext(UserContext);

  const login = () =>
    useGoogleLogin({
      onSuccess: async (response) => {
        await getUserProfile(response);
        user.setIsSignIn(true);
        setOpenDialog(false);
      },
      onError: (error) => console.log(error),
    });

  return (
    <div>
      <Dialog
        open={openDialog}
        onOpenChange={() => {
          setOpenDialog(false);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription className="flex flex-col items-center justify-center gap-1">
              <img src={logo} className="h-20 w-20" />
              <span className="font-bold text-lg text-gray-800">Travelus</span>
              <span className="font-bold text-sm">AI Travel Planner</span>
              <Button
                className="flex gap-3 items-center mt-5"
                onClick={login()}
              >
                <FcGoogle className="h-6 w-6" />
                Sign In with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignInDialog;
