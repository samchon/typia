import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_llm_schema_3_0_ObjectDescription = _test_llm_schema({
  model: "3.0",
  name: "ObjectDescription",
})(typia.llm.schema<ObjectDescription, "3.0">());
