import { _notationKeyCollision } from "./_notationKeyCollision";

/**
 * Define a renamed key as an own data property.
 *
 * A destination that another source key already produced throws instead of
 * being overwritten.
 *
 * @evidence contracts/common.md#principled-implementation The destination key is computed by the rename function and defined as an own data property, so a key such as `__proto__` stays an ordinary property; if the destination already holds a value from another source key, the collision throws instead of overwriting.
 * @evidence contracts/common.md#clear-and-simple-design One function that records the source of each destination in a dictionary without a prototype.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Collisions are an error, and no key is dropped silently.
 * @evidence contracts/common.md#meaningful-documentation A comment states the own-property assignment and the collision rule.
 */
export const _notationAssign = (
  output: Record<string, any>,
  sources: Record<string, string>,
  source: string,
  value: any,
  rename: (str: string) => string,
): void => {
  const destination: string = rename(source);
  if (Object.hasOwn(output, destination))
    _notationKeyCollision(sources[destination]!, source, destination);
  Object.defineProperty(output, destination, {
    configurable: true,
    enumerable: true,
    value,
    writable: true,
  });
  sources[destination] = source;
};
