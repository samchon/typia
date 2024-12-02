import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_llm_schema_3_0_ArrayRecursiveUnionImplicit = _test_llm_schema(
  {
    model: "3.0",
    name: "ArrayRecursiveUnionImplicit",
  },
)(typia.llm.schema<ArrayRecursiveUnionImplicit, "3.0">());
