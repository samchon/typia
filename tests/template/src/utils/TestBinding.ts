import vm from "node:vm";

/**
 * Uses the JavaScript engine as an independent binding-identifier oracle.
 *
 * Candidate inputs are fixture identifiers. Compilation does not execute the
 * candidate source. Strict async-function parameters reject strict restricted
 * names and await, matching the generated modules' binding context.
 *
 * @evidence contracts/common.md#principled-implementation The engine parses strict async binding syntax independently of typia's reserved-word and identifier predicates; compilation errors produce a negative verdict.
 * @evidence contracts/common.md#clear-and-simple-design One shared oracle owns parser context for both name conversion and migrated-route cases, without duplicating the grammar as another word list.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Native parser compilation supplies the verdict and no compiler methods or typia predicates are patched or used to generate expectations.
 * @evidence contracts/common.md#meaningful-documentation Native prose identifies independent-oracle purpose, fixture-only inputs, compilation without execution and the strict async binding context.
 */
export namespace TestBinding {
  /**
   * Reports whether the engine accepts a fixture name in that binding context.
   *
   * This oracle assumes a candidate identifier rather than arbitrary source
   * fragments; it does not tokenize or sanitize untrusted JavaScript.
   *
   * @evidence contracts/common.md#principled-implementation vm.Script parses the candidate in a strict async parameter and reference position; accepting syntax establishes legality under the documented identifier-input premise.
   * @evidence contracts/common.md#clear-and-simple-design A single parse and catch return the boolean verdict without executing the compiled function or starting a separate host.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The operation uses the native VM parser as a reference and preserves typia's separate module-name policy for the caller to assert.
   * @evidence contracts/common.md#meaningful-documentation Native prose states fixture-identifier restrictions and avoids presenting interpolated source as a general-purpose validation boundary.
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
