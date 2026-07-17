"use client";

import { ReactNode } from "react";

const MenuBookIcon = () => (
  <svg
    className="h-6 w-6 shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M11 7.06C9.5 6.06 7.4 5.5 5 5.5c-1.02 0-2 .1-2.9.3A.5.5 0 0 0 1.7 6.29v11.6c0 .32.3.56.61.49C3.06 18.63 4 18.5 5 18.5c2.3 0 4.4.6 6 1.7V7.06z" />
    <path d="M13 7.06C14.5 6.06 16.6 5.5 19 5.5c1.02 0 2 .1 2.9.3a.5.5 0 0 1 .4.49v11.6c0 .32-.3.56-.61.49C20.94 18.63 20 18.5 19 18.5c-2.3 0-4.4.6-6 1.7V7.06z" />
  </svg>
);

const ComputerIcon = () => (
  <svg
    className="h-6 w-6 shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20 4H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 12H4V6h16v10z" />
    <path d="M1 19h22v2H1z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    className="h-6 w-6 shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
  </svg>
);

const HeroButton = (props: {
  title: string;
  href: string;
  icon: ReactNode;
  variant: "contained" | "outlined";
}) => (
  <a
    href={props.href}
    // On the blue hero band the contained button must not inherit the site
    // blue -- blue-on-blue would vanish. It mirrors ttsc's primary CTA:
    // a white button with blue-deep text.
    className={`inline-flex items-center gap-2 rounded-lg border px-6 py-[9.6px] text-[0.95rem] leading-[1.75] font-bold no-underline transition-colors ${
      props.variant === "contained"
        ? "border-transparent bg-white text-[#0f376c] hover:bg-[#f6f9fd]"
        : "border-[rgba(255,255,255,0.3)] text-[rgba(255,255,255,0.9)] hover:border-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.05)]"
    }`}
  >
    {props.icon}
    {props.title}
  </a>
);

const HomeHeroMovie = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0f376c_0%,#184e95_60%,#235da9_100%)] py-20 text-center md:py-32">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.10)_0%,transparent_70%)]" />
      <div className="relative z-[1] mx-auto w-full max-w-[900px] px-4 sm:px-6">
        <img
          src="/logo.png"
          alt="Typia"
          // logo.png is a blue-gradient wordmark on transparency; its ink
          // lands at 1.05-1.96:1 against this band and reads as a watermark.
          // Knock it out to solid white -- the pixel-dissolve silhouette is
          // what carries the mark, and it survives the flatten.
          className="mx-auto mb-6 block brightness-0 invert"
        />
        <h5 className="mx-auto mb-4 max-w-[700px] text-[1rem] leading-[1.7] font-normal text-[rgba(255,255,255,0.92)] sm:text-[1.15rem] md:text-[1.3rem]">
          Transform pure TypeScript types into
          <br />
          <strong className="font-bold text-white">20,000x faster</strong>{" "}
          runtime validators, JSON serializers, and LLM schemas
        </h5>
        <p className="mb-10 text-[1rem] leading-normal text-[rgba(255,255,255,0.66)]">
          Zero schema. Zero overhead. Just TypeScript.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <HeroButton
            title="Guide Documents"
            icon={<MenuBookIcon />}
            href="/docs"
            variant="contained"
          />
          <HeroButton
            title="Playground"
            icon={<ComputerIcon />}
            href="/playground"
            variant="outlined"
          />
          <HeroButton
            title="GitHub"
            icon={<GitHubIcon />}
            href="https://github.com/samchon/typia"
            variant="outlined"
          />
        </div>
      </div>
    </section>
  );
};
export default HomeHeroMovie;
