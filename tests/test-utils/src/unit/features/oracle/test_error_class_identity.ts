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
