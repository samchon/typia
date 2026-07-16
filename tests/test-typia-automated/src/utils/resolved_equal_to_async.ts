import { TestStructure } from "@typia/template";
import { Resolved } from "typia";

import { resolve_projection } from "./resolve_projection";
import {
  IStrictEqualContext,
  strict_blobs_equal_to,
  strict_equal_to,
} from "./strict_equal_to";

/**
 * {@link resolved_equal_to} plus asynchronous `Blob` and `File` byte equality.
 *
 * `Blob.arrayBuffer()` is asynchronous, so a synchronous oracle can compare only
 * a blob's metadata. This variant exists for the `FormData` operations, the only
 * ones whose fixtures carry binary parts: it runs the same strict walk and then
 * awaits the content of every blob pair that walk collected.
 *
 * Keeping it separate keeps the twelve synchronous consumers synchronous.
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
