import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_llm_schema_ObjectUnionNonPredictable = _test_llm_schema(
  "ObjectUnionNonPredictable",
)(typia.llm.schema<ObjectUnionNonPredictable>());
