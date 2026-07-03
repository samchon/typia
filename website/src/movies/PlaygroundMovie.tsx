"use client";

import {
  PlaygroundShell,
  createSandboxRequire,
  loadTypiaRuntimePack,
} from "@ttsc/playground";
import { useEffect } from "react";

import { PLAYGROUND_DEFAULT_SCRIPT } from "../components/playground/PLAYGROUND_DEFAULT_SCRIPT";

const TYPIA_RUNTIME_PACK_URL = "/compiler/typia-runtime-pack.json";

// Nextra's docs Search binds a global "/" hotkey (a window-level, bubbling
// keydown listener) that focuses the search box whenever the active element is
// not an editable field. On the playground that steals "/" the moment focus
// sits on a non-editable pane — the console, the option toggles, the shell
// chrome — instead of the Monaco textarea, so a "/" meant for the editor jumps
// the caret up into the navbar search. The tag set below mirrors Nextra's own
// guard so genuine text inputs (including the Monaco editor's textarea) keep
// receiving "/".
const EDITABLE_TAGS = new Set(["INPUT", "SELECT", "BUTTON", "TEXTAREA"]);

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
 * - `executeBundle`: runs the worker's CommonJS bundle inside a `new Function`
 *   sandbox whose `require` resolves typia's runtime from a prebuilt pack (see
 *   the `executeBundle` doc below), capturing its `console.*` calls.
 */
export default function PlaygroundMovie() {
  // Suppress Nextra's "/" search-focus hotkey while the playground is mounted.
  // Listening in the capture phase means the event is stopped before it can
  // bubble up to Nextra's window-level handler; the activeElement guard lets
  // "/" through untouched whenever an editable element (the Monaco editor, an
  // input, ...) is focused, so only the stray "/" over non-editable panes is
  // swallowed. The listener is torn down on unmount, so search's "/" hotkey
  // keeps working on every other docs page.
  useEffect(() => {
    const suppressSearchHotkey = (event: KeyboardEvent) => {
      if (event.key !== "/") return;
      const el = document.activeElement;
      if (
        el &&
        (EDITABLE_TAGS.has(el.tagName) || (el as HTMLElement).isContentEditable)
      )
        return;
      event.stopPropagation();
    };
    window.addEventListener("keydown", suppressSearchHotkey, true);
    return () =>
      window.removeEventListener("keydown", suppressSearchHotkey, true);
  }, []);
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
 * Run the CommonJS bundle the worker returned inside a `new Function` sandbox,
 * routing `console.*` into the shell's Console pane.
 *
 * The typia transform lowers `typia.is<T>(x)` into `require("typia/lib/internal/
 * _isFormatUuid")` and friends, so the sandbox needs a real `require`. We build
 * one with `createSandboxRequire` over the prebuilt typia runtime pack (the
 * published typia / @typia/* / randexp JS, written by `build/pack-typia-runtime.js`),
 * merged with whatever runtime files the shell installed for user-typed npm
 * imports. Anything outside that set throws so the missing dependency surfaces
 * in the Console pane.
 */
const executeBundle = async (
  code: string,
  sandbox: {
    console: Record<string, (...args: unknown[]) => void>;
    runtimeFiles: Record<string, string>;
  },
): Promise<void> => {
  const runtimePack = await loadTypiaRuntimePack(TYPIA_RUNTIME_PACK_URL);
  const requireFn = createSandboxRequire(
    { ...runtimePack, ...sandbox.runtimeFiles },
    { console: sandbox.console },
  );
  const moduleObj: { exports: Record<string, unknown> } = { exports: {} };
  const wrapped = `(function(require, module, exports, console) {\n${code}\n})`;
  const factory = new Function("return " + wrapped)() as (
    req: (s: string) => unknown,
    mod: typeof moduleObj,
    exp: typeof moduleObj.exports,
    c: typeof sandbox.console,
  ) => void;
  factory(requireFn, moduleObj, moduleObj.exports, sandbox.console);
};
