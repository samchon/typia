import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_llm_schema_ObjectPropertyNullable = _test_llm_schema(
  "ObjectPropertyNullable",
)(typia.llm.schema<ObjectPropertyNullable>());
