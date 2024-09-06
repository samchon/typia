import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_llm_schema_ObjectPrimitive = _test_llm_schema(
  "ObjectPrimitive",
)(typia.llm.schema<ObjectPrimitive>());
