import React from "react";
import { Link } from "react-router-dom";

export default function BackLink() {
  return (
    <div className="backWrap">
      <Link to="/portfolio-website-landing-page" className="backLink">
        Back to <span>Developer Portfolio</span>
      </Link>
    </div>
  );
}
