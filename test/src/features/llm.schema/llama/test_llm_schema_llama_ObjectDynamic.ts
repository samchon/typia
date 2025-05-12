import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_llm_schema_llama_ObjectDynamic = _test_llm_schema({
  model: "llama",
  name: "ObjectDynamic",
})(typia.llm.schema<ObjectDynamic, "llama">({}));
