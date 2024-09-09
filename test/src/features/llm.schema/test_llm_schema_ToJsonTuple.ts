import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_llm_schema_ToJsonTuple = _test_llm_schema("ToJsonTuple")(
  typia.llm.schema<ToJsonTuple>(),
);
