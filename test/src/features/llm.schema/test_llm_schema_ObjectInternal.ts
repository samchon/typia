import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_llm_schema_ObjectInternal = _test_llm_schema(
  "ObjectInternal",
)(typia.llm.schema<ObjectInternal>());
