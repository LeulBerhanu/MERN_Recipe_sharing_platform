import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <div>
        <NavLink to="/">home_______</NavLink>
        <NavLink to="/signup">signup</NavLink>
      </div>
      <div>{user?.email}</div>
    </div>
  );
};

export default Navbar;
