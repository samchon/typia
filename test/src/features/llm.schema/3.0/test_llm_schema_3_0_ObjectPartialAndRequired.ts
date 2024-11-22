import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_llm_schema_3_0_ObjectPartialAndRequired = _test_llm_schema({
  model: "3.0",
  name: "ObjectPartialAndRequired",
})(typia.llm.schema<ObjectPartialAndRequired, "3.0">());
