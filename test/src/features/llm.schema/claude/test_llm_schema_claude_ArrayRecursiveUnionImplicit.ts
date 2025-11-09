import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_llm_schema_claude_ArrayRecursiveUnionImplicit = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ArrayRecursiveUnionImplicit",
  })(typia.llm.schema<ArrayRecursiveUnionImplicit, "claude">({}));
