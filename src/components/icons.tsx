import type { JSX } from "solid-js";

type Icon = JSX.IntrinsicElements["svg"];

export function SunSvg(props: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 12 12"
      aria-label="Light theme"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 9h3V8h1V5H7V4H4v1H3v3h1Zm-3 2h1v-1H1Zm1-1h1V9H2Zm3 2h1v-2H5ZM0 7h2V6H0Zm1-4h1V2H1Zm1 1h1V3H2Zm6 6h1V9H8Zm1 1h1v-1H9ZM5 3h1V1H5Zm4 4h2V6H9ZM8 4h1V3H8Zm1-1h1V2H9Zm0 0"
      />
    </svg>
  );
}

export function MoonSvg(props: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 12 12"
      aria-label="Dark theme"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 12h4v-1h2V9h1V5h-1V3H9V2H8v3H7v2H6v1H4v1H1v1h1v1h2ZM0 9h1V8H0Zm7-7h1V1H7Zm0 0"
      />
    </svg>
  );
}