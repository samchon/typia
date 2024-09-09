import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_llm_schema_TypeTagObjectUnion = _test_llm_schema(
  "TypeTagObjectUnion",
)(typia.llm.schema<TypeTagObjectUnion>());
