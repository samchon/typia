import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_llm_schema_3_0_ObjectPartial = _test_llm_schema({
  model: "3.0",
  name: "ObjectPartial",
})(typia.llm.schema<ObjectPartial, "3.0">());
