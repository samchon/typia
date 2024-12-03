import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_llm_schema_3_1_ArrayRecursiveUnionExplicitPointer =
  _test_llm_schema({
    model: "3.1",
    name: "ArrayRecursiveUnionExplicitPointer",
  })(typia.llm.schema<ArrayRecursiveUnionExplicitPointer, "3.1">({}));
