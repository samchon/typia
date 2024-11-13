import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_llm_schema_chatgpt_ObjectHierarchical = _test_llm_schema({
  model: "chatgpt",
  name: "ObjectHierarchical",
})(typia.llm.schema<ObjectHierarchical, "chatgpt">());
