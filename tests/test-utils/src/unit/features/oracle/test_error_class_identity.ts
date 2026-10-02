import { isErrorClass } from "@typia/template/error-class";
import assert from "node:assert/strict";
import vm from "node:vm";

/**
 * Verifies thrown-error matching compares the class identity, not its name.
 *
 * An assertion helper that accepts any thrown object whose `constructor.name`
 * equals the expected class name also accepts a different class that merely
 * shares the name, an object that spoofs the property, and a copy of the class
 * from another module instance or realm. Users' `instanceof` checks tell those
 * apart, so a helper that cannot is certifying an error type no caller can
 * catch.
 *
 * 1. Accept a direct instance of the expected class.
 * 2. Reject a same-named class, a spoofed `constructor` property, an error from
 *    another realm and a subclass instance.
 * 3. Reject nullish and primitive throws without raising from the matcher.
 *
 * @evidence contracts/testing.md#behavioral-verification TestErrorClass.is judges real objects constructed by the test. The direct instance passes while the same-named class, the spoofed constructor object, the other-realm error, the subclass instance and non-object throws are refused.
 * @evidence contracts/testing.md#independent-expectations Each verdict follows from how the authored value was constructed: which class or realm created it. The language definition of a direct instance and Node's vm realm separation supply the oracle; no value is taken from the matcher itself.
 * @evidence contracts/testing.md#distinguishing-cases The genuine instance is the control and each look-alike changes exactly one identity axis (name collision, property spoof, realm, inheritance). Null, undefined, number, string and symbol throws are boundary inputs.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:unit command registers this exported case with node:test under the plugin-free tsconfig.unit.json; classes and a vm context are created in process with no native build or host. Native assertion helpers call the same matcher around their producers.
 */
export const test_error_class_identity = (): void => {
  class TypeGuardError extends Error {}
  class SubTypeGuardError extends TypeGuardError {}
  class Impostor extends Error {}
  Object.defineProperty(Impostor, "name", { value: "TypeGuardError" });
  const otherRealm: unknown = vm.runInNewContext(
    'class TypeGuardError extends Error {}; new TypeGuardError("x")',
  );
  const spoofed = { constructor: { name: "TypeGuardError" } };

  assert.equal(isErrorClass(new TypeGuardError("x"), TypeGuardError), true);
  for (const lookalike of [
    new Impostor("x"),
    spoofed,
    otherRealm,
    new SubTypeGuardError("x"),
    new Error("TypeGuardError"),
  ])
    assert.equal(isErrorClass(lookalike, TypeGuardError), false);
  for (const thrown of [undefined, null, 0, "TypeGuardError", Symbol("x")])
    assert.equal(isErrorClass(thrown, TypeGuardError), false);
};
