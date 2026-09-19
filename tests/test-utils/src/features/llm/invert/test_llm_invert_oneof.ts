import { ILlmSchema } from "@typia/interface";
import typia from "typia";

import { _test_llm_invert } from "../../../internal/_test_llm_invert";

/**
 * Verifies LLM unions invert to the OpenAPI unions typia emits.
 *
 * The LLM format spells a union as `anyOf` and the emended OpenAPI format as
 * `oneOf`. This case once compared the inversion with the LLM schema itself,
 * skipped every key but `description`, and passed empty `$defs` beside a schema
 * written into other ones, so an unresolved union inverted to `{ oneOf: [] }`
 * unnoticed (#2401).
 *
 * 1. Write a primitive union, a union with literals and `null`, and a union of
 *    objects, an array, and primitives as LLM schemas.
 * 2. Invert each and compare it with `typia.json.schema` of the same type.
 */
export const test_llm_invert_oneof = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  _test_llm_invert(
    "string | number | boolean",
    typia.llm.schema<string | number | boolean>($defs),
    $defs,
    typia.json.schema<string | number | boolean>(),
  );
  _test_llm_invert(
    "string | 1 | 2 | 3 | null",
    typia.llm.schema<string | 1 | 2 | 3 | null>($defs),
    $defs,
    typia.json.schema<string | 1 | 2 | 3 | null>(),
  );
  _test_llm_invert(
    "objects, array, and primitives",
    typia.llm.schema<IMixed>($defs),
    $defs,
    typia.json.schema<IMixed>(),
  );
};

type IMixed =
  | { x: number }
  | { y: number }
  | { z: number }
  | Array<boolean>
  | string
  | number;
