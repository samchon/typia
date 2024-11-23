import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_llm_schema_3_1_ObjectRecursive = _test_llm_schema({
  model: "3.1",
  name: "ObjectRecursive",
})(typia.llm.schema<ObjectRecursive, "3.1">({}));
