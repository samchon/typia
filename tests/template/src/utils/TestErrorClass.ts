/**
 * Whether `error` is an object whose prototype is `ErrorClass.prototype`.
 *
 * Class identity is the prototype object itself. A class that merely shares a
 * name, an object that spoofs a `constructor` property, and an error from
 * another realm or module copy are different identities even when their names
 * agree, and a user's `instanceof` check would treat them differently too.
 * Subclasses are different identities as well: the helpers expect the exact
 * class that the product documents.
 *
 * @param error Value caught from the operation under test.
 * @param ErrorClass Class the operation is documented to throw.
 *
 * @returns True only for a direct instance of that exact class.
 *
 * @evidence contracts/common.md#principled-implementation Object.getPrototypeOf(error) === ErrorClass.prototype is the language-level definition of a direct instance, so the verdict depends on prototype identity and not on any string a class or object can carry. Primitive and nullish throws have no prototype relationship and are refused before the lookup.
 * @evidence contracts/common.md#clear-and-simple-design One predicate with one identity comparison replaces the repeated constructor-name comparisons of the native assertion helpers, so the policy cannot drift between them.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The predicate reads no fixture name, message or error property and patches no class; it rejects lookalikes instead of compensating for them.
 * @evidence contracts/common.md#meaningful-documentation The comment states that identity means the prototype object, which lookalikes this refuses and that subclasses are intentionally distinct, so a helper author knows what a pass establishes.
 * @evidence contracts/testing.md#behavioral-verification The unit case runs the predicate on a genuine instance, a same-named class, a spoofed constructor property, an error from another realm, a subclass and non-object throws; the first passes and every other fails.
 * @evidence contracts/testing.md#independent-expectations Each verdict follows from how the authored value was constructed (which class or realm made it), and no expectation is taken from the predicate or from the name comparison it replaces.
 * @evidence contracts/testing.md#distinguishing-cases The genuine instance is the positive control and each look-alike differs from it along one identity axis (name, property, realm, subclass); null, undefined and primitive throws are the boundary inputs.
 * @evidence contracts/testing.md#execution-ownership Plugin-free test-utils test:unit cases call the predicate directly; native assertion helpers call the same predicate around their producers and need no native host to evaluate it.
 */
export const isErrorClass = (error: unknown, ErrorClass: Function): boolean =>
  typeof error === "object" &&
  error !== null &&
  Object.getPrototypeOf(error) === ErrorClass.prototype;
