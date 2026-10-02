import vm from "node:vm";

/**
 * Uses the JavaScript engine as an independent binding-identifier oracle.
 *
 * Candidate inputs are fixture identifiers. Compilation does not execute the
 * candidate source. Strict async-function parameters reject strict restricted
 * names and await, matching the generated modules' binding context.
 */
export namespace TestBinding {
  /**
   * Reports whether the engine accepts a fixture name in that binding context.
   *
   * This oracle assumes a candidate identifier rather than arbitrary source
   * fragments; it does not tokenize or sanitize untrusted JavaScript.
   */
  export const isLegal = (name: string): boolean => {
    try {
      new vm.Script(
        `"use strict"; async function getBy(${name}) { return ${name}; }`,
      );
      return true;
    } catch {
      return false;
    }
  };
}
