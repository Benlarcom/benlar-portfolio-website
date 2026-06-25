import React, { useMemo, useState, useRef, useEffect } from "react";

export default function CategoryDropdown({ value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  const selectedIndex = useMemo(
    () => Math.max(0, options.indexOf(value)),
    [options, value]
  );

  useEffect(() => {
    function onDocDown(e) {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, []);

  return (
    <div className="dropdown" ref={wrapRef}>
      {/* invisible trigger is in Header; we show a menu under PROJECTS */}
      {open || selectedIndex >= 0 ? null : null}

      <button
        className="srOnly"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
      >
        Toggle
      </button>

      <div className="dropdownMenuWrap">
        <div className="dropdownMenu" role="menu" aria-label="Project categories">
          {/* always visible under the label per your template intent;
              if you want click-to-open behavior, tell me and I’ll adjust */}
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`dropdownItem ${opt === value ? "active" : ""}`}
              role="menuitemradio"
              aria-checked={opt === value}
              onClick={() => onChange(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
