/** @internal */
export function NoTransformConfigurationError(name: string): never {
  throw new Error(
    [
      `Error on typia.${name}(): no transform has been configured.`,
      "",
      "Read and follow https://typia.io/docs/setup please.",
      "",
      [
        "If you've already completed the setup, it means there's",
        "a bug in your code. Run `tsc` command so that check what",
        "is wrong with your code.",
      ].join(" "),
    ].join("\n"),
  );
}
