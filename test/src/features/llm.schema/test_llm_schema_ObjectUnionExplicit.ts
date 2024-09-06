import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_llm_schema_ObjectUnionExplicit = _test_llm_schema(
  "ObjectUnionExplicit",
)(typia.llm.schema<ObjectUnionExplicit>());
