"use client";

import { PlaygroundShell } from "@ttsc/playground";

import { PLAYGROUND_DEFAULT_SCRIPT } from "../components/playground/PLAYGROUND_DEFAULT_SCRIPT";

/**
 * In-browser typia playground.
 *
 * Thin wrapper around `@ttsc/playground`'s `PlaygroundShell`. The
 * site-specific bits are:
 *
 * - `workerUrl`: rspack output of `src/compiler/index.ts`, which wires
 *   `ttsc-typia.wasm` into `createWorkerCompiler`.
 * - `defaultScript`: typia's canonical hello-world (random + is + json +
 *   protobuf).
 * - `optionToggles`: typia's four transform options (finite / numeric /
 *   functional / undefined). The corresponding boolean flags are forwarded
 *   to the wasm-side typia adapter via `tsconfig.compilerOptions.plugins`.
 * - `executeBundle`: typia's bundler returns a self-contained CJS module
 *   thanks to `RollupBundler` (which inlines esm.sh imports at bundle
 *   time). We hand it to `new Function` and capture its `console.*` calls.
 */
export default function PlaygroundMovie() {
  return (
    <PlaygroundShell
      workerUrl="/compiler/index.js"
      defaultScript={PLAYGROUND_DEFAULT_SCRIPT}
      optionToggles={[
        {
          key: "finite",
          label: "finite",
          description:
            "Restrict every number to finite IEEE-754 values (no NaN, no ±Infinity).",
        },
        {
          key: "numeric",
          label: "numeric",
          description:
            "Run numeric range / tag validation. Pair with `tags.Type<...>`.",
        },
        {
          key: "functional",
          label: "functional",
          description:
            "Treat function-typed properties as required to be present.",
        },
        {
          key: "undefined",
          label: "undefined",
          description:
            "Strict about `undefined` values vs. missing object properties.",
        },
      ]}
      // typia is the only plugin in this wasm; default to "all on" but show
      // the toggles so users can flip them.
      defaultOptions={{
        finite: false,
        numeric: false,
        functional: false,
        undefined: false,
        typia: true,
      }}
      brand={
        <a
          href="/"
          className="font-mono text-sm font-bold text-white hover:text-blue-400 transition-colors"
        >
          typia
        </a>
      }
      executeBundle={executeBundle}
    />
  );
}

/**
 * Run a self-contained CJS module the typia worker returned (post-rollup,
 * post-esm.sh inline) inside a `new Function` sandbox, routing `console.*`
 * into the shell's Console pane.
 *
 * RollupBundler inlines every external import, so a no-op `require` is
 * sufficient — any leftover require call is a bug in the user's source the
 * `throw` will surface in the Console pane.
 */
const executeBundle = async (
  code: string,
  sandbox: { console: Record<string, (...args: unknown[]) => void> },
): Promise<void> => {
  const moduleObj: { exports: Record<string, unknown> } = { exports: {} };
  const requireFn = (specifier: string): unknown => {
    throw new Error(
      `require("${specifier}") is not available in the typia playground sandbox`,
    );
  };
  const wrapped = `(function(require, module, exports, console) {\n${code}\n})`;
  const factory = new Function("return " + wrapped)() as (
    req: (s: string) => unknown,
    mod: typeof moduleObj,
    exp: typeof moduleObj.exports,
    c: typeof sandbox.console,
  ) => void;
  factory(requireFn, moduleObj, moduleObj.exports, sandbox.console);
};
