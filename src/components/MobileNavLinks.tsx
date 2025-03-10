import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/order-status"
        className="flex bg-white items-center font-bold hover:text-yellow-500"
      >
        Order Status
      </Link>
      <Link
        to="/manage-store"
        className="flex bg-white items-center font-bold hover:text-yellow-500"
      >
        My Store
      </Link>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-yellow-500"
      >
        User Profile
      </Link>
      <Button
        onClick={() => logout()}
        className="flex items-center px-3 font-bold hover:bg-gray-500"
      >
        Logout
      </Button>
    </>
  );
};

export default MobileNavLinks;