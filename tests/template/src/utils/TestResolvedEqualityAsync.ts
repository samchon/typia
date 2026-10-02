import type { Resolved } from "@typia/interface";

import { resolve_projection } from "./TestResolveProjection";
import type { TestStructure } from "./TestStructure";
import {
  IStrictEqualContext,
  strict_blobs_equal_to,
  strict_equal_to,
} from "./TestTransportStrictEquality";

/**
 * {@link resolved_equal_to} plus asynchronous `Blob` and `File` byte equality.
 *
 * `Blob.arrayBuffer()` is asynchronous, so a synchronous oracle can compare
 * only a blob's metadata. This variant exists for the `FormData` operations,
 * the only ones whose fixtures carry binary parts: it runs the same strict walk
 * and then awaits the content of every blob pair that walk collected.
 *
 * Synchronous codec and header/query consumers use the structural entry;
 * FormData consumers must await this byte-aware result before finishing.
 */
export const resolved_equal_to_async =
  <T>(factory: TestStructure<T>) =>
  async (
    input: T,
    output: T | Resolved<T>,
    props?: Omit<IStrictEqualContext, "blobs">,
  ): Promise<boolean> => {
    const ctx: IStrictEqualContext = { ...props, blobs: [] };
    return (
      strict_equal_to(resolve_projection(factory, input), output, ctx) &&
      (await strict_blobs_equal_to(ctx))
    );
  };
