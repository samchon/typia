import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_llm_schema_ObjectRecursive = _test_llm_schema(
  "ObjectRecursive",
)(typia.llm.schema<ObjectRecursive>());
