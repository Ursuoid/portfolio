
import { ThemeController } from "./theme-controller";

export function Navbar() {
  return (
    <div class="navbar bg-primary text-primary-content shadow-sm">
      <div class="navbar-start gap-3">
        <a href="/" class="btn btn-primary btn-solid text-2xl font-header">
          bear
        </a>
      </div>
      <div class="navbar-end">
        <ThemeController />
      </div>
    </div>
  );
}
