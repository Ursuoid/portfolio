
import { ThemeController } from "./theme-controller";
import { BearBWSvg, BearcolSvg } from "./icons";

export function Navbar() {
  return (
    <div class="navbar bg-primary sticky">
      <div class="navbar-start">
        {/* <BearBWSvg class="w-10 h-10 text-base-100"/> */}
      <h1 class="text-2xl font-header text-base-content ml-6">A Bear's Portfolio</h1>
      </div>
      <div class="navbar-end">
        {/* <ThemeController /> */}
      </div>
    </div>
  );
}
