import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_llm_schema_3_1_ObjectInternal = _test_llm_schema({
  model: "3.1",
  name: "ObjectInternal",
})(typia.llm.schema<ObjectInternal, "3.1">());
