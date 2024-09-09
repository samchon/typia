import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_llm_schema_ObjectIntersection = _test_llm_schema(
  "ObjectIntersection",
)(typia.llm.schema<ObjectIntersection>());
