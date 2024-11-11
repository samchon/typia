import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_llm_schema_ArrayRecursiveUnionImplicit = _test_llm_schema(
  "ArrayRecursiveUnionImplicit",
)(typia.llm.schema<ArrayRecursiveUnionImplicit>());
