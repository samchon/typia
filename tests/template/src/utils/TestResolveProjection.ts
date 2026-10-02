import type { TestStructure } from "./TestStructure";

/**
 * The shape a resolving operation must produce from a fixture's input.
 *
 * Almost every structure resolves into itself, so the oracle compares the input
 * directly. A structure whose declared type resolves into something narrower
 * says so through {@link TestStructure.RESOLVE}, and this is the single place
 * that rule is applied — the two `resolved_equal_to` variants must never grow
 * their own copy of it, which is how the resolving and Protocol Buffer oracles
 * drifted apart before.
 *
 * @evidence contracts/common.md#principled-implementation Applies authored RESOLVE when present, otherwise retains the input value.
 * @evidence contracts/common.md#clear-and-simple-design One conditional centralizes projection for both resolving comparisons.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Projection is fixture-authored type knowledge, not derived from native output or fixture names.
 * @evidence contracts/common.md#meaningful-documentation The native prose explains why projection belongs to fixtures and how both consumers share it.
 */
export const resolve_projection = <T>(
  factory: TestStructure<T>,
  input: T,
): unknown => (factory.RESOLVE !== undefined ? factory.RESOLVE(input) : input);
