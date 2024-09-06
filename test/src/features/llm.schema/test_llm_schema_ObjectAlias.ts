import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_llm_schema_ObjectAlias = _test_llm_schema("ObjectAlias")(
  typia.llm.schema<ObjectAlias>(),
);
