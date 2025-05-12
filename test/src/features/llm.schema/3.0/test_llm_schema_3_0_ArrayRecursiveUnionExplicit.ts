import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_llm_schema_3_0_ArrayRecursiveUnionExplicit = _test_llm_schema(
  {
    model: "3.0",
    name: "ArrayRecursiveUnionExplicit",
  },
)(typia.llm.schema<ArrayRecursiveUnionExplicit, "3.0">());
