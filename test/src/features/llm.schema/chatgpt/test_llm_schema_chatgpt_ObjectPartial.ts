import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_llm_schema_chatgpt_ObjectPartial = _test_llm_schema({
  model: "chatgpt",
  name: "ObjectPartial",
})(typia.llm.schema<ObjectPartial, "chatgpt">());
