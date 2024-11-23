import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_llm_schema_3_1_ObjectIntersection = _test_llm_schema({
  model: "3.1",
  name: "ObjectIntersection",
})(typia.llm.schema<ObjectIntersection, "3.1">({}));
