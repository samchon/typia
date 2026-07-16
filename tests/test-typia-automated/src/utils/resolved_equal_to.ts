import { TestStructure } from "@typia/template";
import { Resolved } from "typia";

import { strict_equal_to } from "./strict_equal_to";

/**
 * Asserts a resolving operation reproduced its input's declared projection.
 *
 * The helper used to answer `true` for every fixture whose name contained
 * `Class`, and for every comparison involving a function, so whole fixture
 * classes executed with no oracle at all. Fixture-specific type knowledge now
 * lives at the fixture contract instead: a structure that resolves into
 * something other than its own input declares that shape through
 * {@link TestStructure.RESOLVE}, while the comparison itself is unconditionally
 * strict.
 *
 * `Blob` content needs {@link resolved_equal_to_async}; this variant reaches
 * only a blob's metadata.
 */
export const resolved_equal_to =
  <T>(factory: TestStructure<T>) =>
  (input: T, output: T | Resolved<T>, tracer?: { value?: string }): boolean =>
    strict_equal_to(
      factory.RESOLVE !== undefined ? factory.RESOLVE(input) : input,
      output,
      { tracer },
    );
