import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_llm_schema_3_1_ObjectTuple = _test_llm_schema({
  model: "3.1",
  name: "ObjectTuple",
})(typia.llm.schema<ObjectTuple, "3.1">());
