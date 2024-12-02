import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_llm_schema_llama_ObjectRequired = _test_llm_schema({
  model: "llama",
  name: "ObjectRequired",
})(typia.llm.schema<ObjectRequired, "llama">({}));
