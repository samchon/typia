import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_llm_schema_ObjectGenericUnion = _test_llm_schema(
  "ObjectGenericUnion",
)(typia.llm.schema<ObjectGenericUnion>());
