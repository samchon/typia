import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_llm_schema_3_1_ObjectHierarchical = _test_llm_schema({
  model: "3.1",
  name: "ObjectHierarchical",
})(typia.llm.schema<ObjectHierarchical, "3.1">());
