import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_llm_schema_llama_ArrayRecursiveUnionExplicitPointer =
  _test_llm_schema({
    model: "llama",
    name: "ArrayRecursiveUnionExplicitPointer",
  })(typia.llm.schema<ArrayRecursiveUnionExplicitPointer, "llama">({}));
