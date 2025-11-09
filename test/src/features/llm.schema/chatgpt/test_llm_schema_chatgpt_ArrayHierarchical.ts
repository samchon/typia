import typia from "typia";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ArrayHierarchical = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ArrayHierarchical",
  })(typia.llm.schema<ArrayHierarchical, "chatgpt">({}));