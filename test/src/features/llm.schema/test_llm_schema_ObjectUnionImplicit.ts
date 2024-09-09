import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_llm_schema_ObjectUnionImplicit = _test_llm_schema(
  "ObjectUnionImplicit",
)(typia.llm.schema<ObjectUnionImplicit>());
