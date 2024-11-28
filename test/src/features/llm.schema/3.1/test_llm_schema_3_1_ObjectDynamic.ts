import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_llm_schema_3_1_ObjectDynamic = _test_llm_schema({
  model: "3.1",
  name: "ObjectDynamic",
})(typia.llm.schema<ObjectDynamic, "3.1">({}));
