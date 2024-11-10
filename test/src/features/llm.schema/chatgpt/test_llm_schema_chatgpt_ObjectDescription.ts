import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_llm_schema_chatgpt_ObjectDescription = _test_llm_schema({
  model: "chatgpt",
  name: "ObjectDescription",
})(typia.llm.schema<ObjectDescription, "chatgpt">());
