import vm from "node:vm";

/**
 * Ask the JavaScript engine whether `name` can be a binding identifier in the
 * dialect typia generates.
 *
 * Generated SDK artifacts are ES modules, which are always strict and always
 * reserve `await`. Rather than restate the ECMAScript grammar in a word list —
 * the very mistake that produced #2111 — this asks Node's own parser, so the
 * expectation is derived from the engine instead of from typia's output.
 *
 * The `"use strict"` + `async` context reproduces module-goal binding legality
 * exactly: strict mode supplies the future-reserved words (`let`, `static`,
 * `implements`, `interface`, `yield`) and the `eval`/`arguments` BoundNames
 * restriction, while the async context supplies the `await` reservation.
 * `vm.Script` is used deliberately in place of `vm.SourceTextModule`, which
 * would require the `--experimental-vm-modules` flag this suite does not run
 * with.
 *
 * @param name Candidate binding identifier
 * @returns True when the engine accepts `name` as a binding identifier
 */
export const _isLegalBinding = (name: string): boolean => {
  try {
    new vm.Script(
      `"use strict"; async function getBy(${name}) { return ${name}; }`,
    );
    return true;
  } catch {
    return false;
  }
};
