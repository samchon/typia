import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_llm_schema_ObjectGeneric = _test_llm_schema("ObjectGeneric")(
  typia.llm.schema<ObjectGeneric>(),
);
