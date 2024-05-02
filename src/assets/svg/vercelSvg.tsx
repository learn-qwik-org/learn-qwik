import { component$ } from "@builder.io/qwik";

interface VercelSvgProps {
  width?: number;
  height?: number;
}

export const VercelSvg = component$<VercelSvgProps>(({ height = 22 }) => {
  return (
    <svg
      aria-label="Vercel logomark"
      height={height}
      style="width:auto;overflow:visible"
      viewBox="0 0 74 64"
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill="var(--geist-foreground)"
      ></path>
    </svg>
  );
});
