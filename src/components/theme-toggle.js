import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (theme == null) return null;
        return (
          <div className="toggle">
            <input
              id="toggle"
              className="form-checkbox opacity-0 h-0 w-0"
              type="checkbox"
              onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />

            {theme === "dark" ? (
              <label for="toggle">🌞</label>
            ) : (
              <label for="toggle">🌙</label>
            )}
          </div>
        );
      }}
    </ThemeToggler>
  );
}
