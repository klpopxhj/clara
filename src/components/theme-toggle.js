import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (theme == null) return null;
        return (
          <label>
            <input
              class="form-checkbox h-5 w-5 text-gray-600"
              type="checkbox"
              onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
            <span></span>
          </label>
        );
      }}
    </ThemeToggler>
  );
}
