import vm from "node:vm";

/**
 * Compile `code` and report whether the engine accepts it.
 *
 * `vm.Script` is used deliberately in place of `vm.SourceTextModule`, which
 * would require the `--experimental-vm-modules` flag this suite does not run
 * with. Every probe below supplies module-goal semantics explicitly instead:
 * `"use strict"` for the strict-mode restrictions, and an `async` context for
 * the `await` reservation.
 */
const compiles = (code: string): boolean => {
  try {
    new vm.Script(code);
    return true;
  } catch {
    return false;
  }
};

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
 *
 * @param name Candidate binding identifier
 * @returns True when the engine accepts `name` as a binding identifier
 */
export const _isLegalBinding = (name: string): boolean =>
  compiles(`"use strict"; async function getBy(${name}) { return ${name}; }`);

/**
 * Ask the engine whether a generated SDK function declaration compiles.
 *
 * This is the contract `IHttpMigrateRoute` actually has to satisfy: the
 * accessor becomes the function name and each parameter key becomes one of its
 * parameters. Compiling the whole declaration — rather than each name in
 * isolation — additionally proves the parameter keys neither collide with each
 * other nor with `connection`, since strict mode rejects duplicate parameter
 * names.
 *
 * @param props.name Function name taken from the route accessor
 * @param props.parameters Parameter names taken from the route parameter keys
 * @returns True when the engine accepts the declaration
 */
export const _isLegalDeclaration = (props: {
  name: string;
  parameters: string[];
}): boolean => {
  const parameters: string = props.parameters.join(", ");
  return compiles(
    `"use strict"; async function ${props.name}(${parameters}) { return [${parameters}]; }`,
  );
};
