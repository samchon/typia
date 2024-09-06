import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_llm_schema_ObjectHierarchical = _test_llm_schema(
  "ObjectHierarchical",
)(typia.llm.schema<ObjectHierarchical>());
