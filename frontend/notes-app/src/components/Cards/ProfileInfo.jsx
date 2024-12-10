import React from "react";
import { getInitialsName } from "../../utils/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitialsName("Duc toan")}
      </div>

      <div>
        <p className="text-sm font-medium">Duc Toan</p>
        <button className="text-sm text-slate-500 underline">Logout</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
