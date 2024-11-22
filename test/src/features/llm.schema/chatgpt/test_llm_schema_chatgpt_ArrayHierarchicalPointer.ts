import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_llm_schema_chatgpt_ArrayHierarchicalPointer =
  _test_llm_schema({
    model: "chatgpt",
    name: "ArrayHierarchicalPointer",
  })(typia.llm.schema<ArrayHierarchicalPointer, "chatgpt">({}));
