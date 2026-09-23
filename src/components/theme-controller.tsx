import { createEffect, createSignal, onMount } from "solid-js";
import { MoonSvg, SunSvg } from "./icons";

const THEMES = ["light", "dark"];
const [theme, setTheme] = createSignal("light");

onMount(() => {
  const saved = localStorage.getItem("theme");
  if (saved && THEMES.includes(saved)) {
    setTheme(saved);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme("dark");
  }
});

createEffect(() => {
  document.documentElement.setAttribute("data-theme", theme());
  localStorage.setItem("theme", theme());
});

export function ThemeController() {
  return (
    <label class="swap swap-rotate">
      <input
        type="checkbox"
        class="theme-controller"
        checked={theme() === "dark"}
        onChange={(e) => setTheme(e.currentTarget.checked ? "dark" : "light")}
      />
      {/* sun icon */}
      <SunSvg class="swap-off h-10 w-10 fill-current" />

      {/* moon icon */}
      <MoonSvg class="swap-on h-10 w-10 fill-current" />
    </label>
  );
}
