import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_llm_schema_ToJsonDouble = _test_llm_schema("ToJsonDouble")(
  typia.llm.schema<ToJsonDouble>(),
);
