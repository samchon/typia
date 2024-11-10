import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_llm_schema_3_0_ObjectPropertyNullable = _test_llm_schema({
  model: "3.0",
  name: "ObjectPropertyNullable",
})(typia.llm.schema<ObjectPropertyNullable, "3.0">());
