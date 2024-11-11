import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_llm_schema_chatgpt_ObjectOptional = _test_llm_schema({
  model: "chatgpt",
  name: "ObjectOptional",
})(typia.llm.schema<ObjectOptional, "chatgpt">());
