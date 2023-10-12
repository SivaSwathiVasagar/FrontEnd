import { NavLink } from "react-router-dom";
import React from "react";

export default function Nav() {
  return (
    <div className="Nav">
      <NavLink to="/">
        <div>Home</div>
      </NavLink>
      <NavLink to="/blog">
        <div>Blog</div>
      </NavLink>
      <NavLink to="/about">
        <div>About</div>
      </NavLink>
      <NavLink to="/bmi">
        <div>BMI</div>
      </NavLink>
      <NavLink to="/workout-log">
        <div>WorkoutLog</div>
      </NavLink>
    </div>
  );
}
