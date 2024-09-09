import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_llm_schema_ObjectTuple = _test_llm_schema("ObjectTuple")(
  typia.llm.schema<ObjectTuple>(),
);
