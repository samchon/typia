import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_llm_schema_3_1_ObjectSimple = _test_llm_schema({
  model: "3.1",
  name: "ObjectSimple",
})(typia.llm.schema<ObjectSimple, "3.1">({}));
