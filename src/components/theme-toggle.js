import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (theme == null) return null;
        return (
          <div className="toggle">
            {theme === "dark" ? (
              <label for="toggle">
                <FiSun size={20} />
              </label>
            ) : (
              <label for="toggle">
                <FiMoon size={20} />
              </label>
            )}
            <input
              id="toggle"
              className="form-checkbox block opacity-0 h-0 w-0"
              type="checkbox"
              onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
          </div>
        );
      }}
    </ThemeToggler>
  );
}
