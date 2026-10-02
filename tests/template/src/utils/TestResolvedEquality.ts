import type { Resolved } from "@typia/interface";

import { resolve_projection } from "./TestResolveProjection";
import type { TestStructure } from "./TestStructure";
import {
  IStrictEqualContext,
  strict_equal_to,
} from "./TestTransportStrictEquality";

/**
 * Asserts a resolving operation reproduced its input's declared projection.
 *
 * The helper used to answer `true` for every fixture whose name contained
 * `Class`, and for every comparison involving a function, so whole fixture
 * classes executed with no oracle at all. Fixture-specific type knowledge now
 * lives at the fixture contract instead, through {@link TestStructure.RESOLVE},
 * while the comparison itself is unconditionally strict.
 *
 * A `Blob` needs {@link resolved_equal_to_async}, whose awaited pass can read
 * content; meeting one here throws rather than compare a blob only by its
 * metadata.
 *
 * @evidence contracts/common.md#principled-implementation Compares the fixture projection with actual output through the shared transport-aware walker.
 * @evidence contracts/common.md#clear-and-simple-design Projection is applied once before forwarding context to strict_equal_to; Blob input without async context throws a harness error.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The comparator permits nullish/empty transport omissions and relative numeric error below 0.001 of expected x; finite acyclic data is assumed, so this is not generic exact equality.
 * @evidence contracts/common.md#meaningful-documentation Native prose identifies fixture-authored projection and the Blob async boundary; these answers disclose comparison limitations.
 */
export const resolved_equal_to =
  <T>(factory: TestStructure<T>) =>
  (
    input: T,
    output: T | Resolved<T>,
    props?: Omit<IStrictEqualContext, "blobs">,
  ): boolean =>
    strict_equal_to(resolve_projection(factory, input), output, { ...props });
