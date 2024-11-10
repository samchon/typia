import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_llm_schema_3_0_ObjectNullable = _test_llm_schema({
  model: "3.0",
  name: "ObjectNullable",
})(typia.llm.schema<ObjectNullable, "3.0">());
