import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_llm_schema_3_1_ObjectUnionExplicit = _test_llm_schema({
  model: "3.1",
  name: "ObjectUnionExplicit",
})(typia.llm.schema<ObjectUnionExplicit, "3.1">({}));
