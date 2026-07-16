import { TestStructure } from "@typia/template";
import { Resolved } from "typia";

import { resolve_projection } from "./resolve_projection";
import { IStrictEqualContext, strict_equal_to } from "./strict_equal_to";

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
 */
export const resolved_equal_to =
  <T>(factory: TestStructure<T>) =>
  (
    input: T,
    output: T | Resolved<T>,
    props?: Omit<IStrictEqualContext, "blobs">,
  ): boolean =>
    strict_equal_to(resolve_projection(factory, input), output, { ...props });
