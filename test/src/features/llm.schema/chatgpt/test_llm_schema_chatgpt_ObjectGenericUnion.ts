import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_llm_schema_chatgpt_ObjectGenericUnion = _test_llm_schema({
  model: "chatgpt",
  name: "ObjectGenericUnion",
})(typia.llm.schema<ObjectGenericUnion, "chatgpt">({}));
