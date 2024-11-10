import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_llm_schema_3_0_ObjectGenericArray = _test_llm_schema({
  model: "3.0",
  name: "ObjectGenericArray",
})(typia.llm.schema<ObjectGenericArray, "3.0">());
