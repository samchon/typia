import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_llm_schema_chatgpt_ArrayHierarchical = _test_llm_schema({
  model: "chatgpt",
  name: "ArrayHierarchical",
})(typia.llm.schema<ArrayHierarchical, "chatgpt">({}));
