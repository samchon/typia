/** @internal */
export function NoTransformConfigurationError(name: string): never {
  throw new Error(
    [
      `Error on typia.${name}(): no transform has been configured.`,
      "",
      [
        "Build the project with `ttsc` (not stock `tsc`), run TypeScript",
        "with `ttsx`, or configure `@ttsc/unplugin` for a bundler.",
        "These toolchains discover typia's native transform automatically.",
      ].join(" "),
      "",
      [
        "If `ttsc` is missing, install it with",
        "`npm i -D ttsc typescript`.",
      ].join(" "),
      "",
      [
        "If setup is already complete, run `npx ttsc --noEmit` to",
        "surface the underlying TypeScript or typia transform error.",
      ].join(" "),
      "",
      [
        "Stock `tsc`, `ts-node`, `tsx`, Babel, and SWC do not load",
        "typia's transform on their own.",
      ].join(" "),
      "",
      "See https://typia.io/docs/setup for setup and bundler instructions.",
    ].join("\n"),
  );
}
