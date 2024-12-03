import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_llm_schema_llama_ObjectPartialAndRequired = _test_llm_schema({
  model: "llama",
  name: "ObjectPartialAndRequired",
})(typia.llm.schema<ObjectPartialAndRequired, "llama">({}));
