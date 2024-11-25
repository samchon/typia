import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_llm_schema_llama_ObjectGenericArray = _test_llm_schema({
  model: "llama",
  name: "ObjectGenericArray",
})(typia.llm.schema<ObjectGenericArray, "llama">({}));
