import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_llm_schema_chatgpt_ObjectIntersection = _test_llm_schema({
  model: "chatgpt",
  name: "ObjectIntersection",
})(typia.llm.schema<ObjectIntersection, "chatgpt">({}));
