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
 */
export const isErrorClass = (error: unknown, ErrorClass: Function): boolean =>
  typeof error === "object" &&
  error !== null &&
  Object.getPrototypeOf(error) === ErrorClass.prototype;
