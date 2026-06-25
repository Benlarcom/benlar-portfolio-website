import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./routes/LandingPage.jsx";
import ProjectsPage from "./routes/ProjectsPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/portfolio-website-landing-page" replace />}
      />
      <Route path="/portfolio-website-landing-page" element={<LandingPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="*" element={<Navigate to="/portfolio-website-landing-page" replace />} />
    </Routes>
  );
}
