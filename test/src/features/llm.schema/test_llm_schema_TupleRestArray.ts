import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_llm_schema_TupleRestArray = _test_llm_schema(
  "TupleRestArray",
)(typia.llm.schema<TupleRestArray>());
