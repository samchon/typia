import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_llm_schema_gemini_ArrayRecursiveUnionExplicit = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ArrayRecursiveUnionExplicit",
  })(typia.llm.schema<ArrayRecursiveUnionExplicit, "gemini">({}));
