import { TestStructure } from "@typia/template";

/**
 * The shape a resolving operation must produce from a fixture's input.
 *
 * Almost every structure resolves into itself, so the oracle compares the input
 * directly. A structure whose declared type resolves into something narrower
 * says so through {@link TestStructure.RESOLVE}, and this is the single place
 * that rule is applied — the two `resolved_equal_to` variants must never grow
 * their own copy of it, which is how the resolving and Protocol Buffer oracles
 * drifted apart before.
 */
export const resolve_projection = <T>(
  factory: TestStructure<T>,
  input: T,
): unknown => (factory.RESOLVE !== undefined ? factory.RESOLVE(input) : input);
