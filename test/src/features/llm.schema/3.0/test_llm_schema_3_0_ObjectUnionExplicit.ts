import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_llm_schema_3_0_ObjectUnionExplicit = _test_llm_schema({
  model: "3.0",
  name: "ObjectUnionExplicit",
})(typia.llm.schema<ObjectUnionExplicit, "3.0">());
