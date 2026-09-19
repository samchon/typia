import { ILlmSchema } from "@typia/interface";
import typia from "typia";

import { _test_llm_invert } from "../../../internal/_test_llm_invert";

/**
 * Verifies literal LLM schemas invert to the OpenAPI constants typia emits.
 *
 * The LLM format spells a literal union as a typed `enum`, while the emended
 * OpenAPI format spells each member as a `const`. This case once compared the
 * inversion with the LLM schema itself and skipped every key but `description`,
 * so it asserted nothing (#2401).
 *
 * 1. Write a boolean, a numeric, and a string literal union as LLM schemas.
 * 2. Invert each and compare it with `typia.json.schema` of the same type.
 */
export const test_llm_invert_enum = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  _test_llm_invert(
    "false",
    typia.llm.schema<false>($defs),
    $defs,
    typia.json.schema<false>(),
  );
  _test_llm_invert(
    "1 | 2 | 3",
    typia.llm.schema<1 | 2 | 3>($defs),
    $defs,
    typia.json.schema<1 | 2 | 3>(),
  );
  _test_llm_invert(
    `"a" | "b" | "c"`,
    typia.llm.schema<"a" | "b" | "c">($defs),
    $defs,
    typia.json.schema<"a" | "b" | "c">(),
  );
};
