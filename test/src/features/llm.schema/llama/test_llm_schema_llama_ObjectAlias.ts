import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_llm_schema_llama_ObjectAlias = _test_llm_schema({
  model: "llama",
  name: "ObjectAlias",
})(typia.llm.schema<ObjectAlias, "llama">({}));
