import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_llm_schema_chatgpt_ObjectUnionImplicit = _test_llm_schema({
  model: "chatgpt",
  name: "ObjectUnionImplicit",
})(typia.llm.schema<ObjectUnionImplicit, "chatgpt">({}));
