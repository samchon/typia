import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_llm_schema_llama_ObjectUndefined = _test_llm_schema({
  model: "llama",
  name: "ObjectUndefined",
})(typia.llm.schema<ObjectUndefined, "llama">({}));
