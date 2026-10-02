import { Primitive } from "typia";

/**
 * Uses platform JSON serialization and parsing to obtain a JSON-shaped fixture
 * projection; undefined remains undefined.
 *
 * @evidence contracts/common.md#principled-implementation Uses platform JSON serialization and parsing to obtain a JSON-shaped fixture projection; undefined remains undefined.
 * @evidence contracts/common.md#clear-and-simple-design A top-level undefined branch avoids parsing absent JSON text; all other inputs use the platform serializer/parser pair.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts This is a JSON projection, not a generic deep clone. Non-serializable cycles and bigint can throw; nested undefined/callables follow JSON omission semantics.
 * @evidence contracts/common.md#meaningful-documentation The comment names JSON projection and the top-level undefined exception instead of promising full cloning.
 */
export function primitive_clone<T>(input: T): Primitive<T> {
  if (input === undefined) return undefined!;
  return JSON.parse(JSON.stringify(input));
}
