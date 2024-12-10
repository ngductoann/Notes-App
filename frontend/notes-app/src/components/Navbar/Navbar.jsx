import React from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";

const Navbar = () => {
  const navigate = useNavigation;

  const onLogout = () => {
    navigate("/logout");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>

        <SearchBar />

      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
