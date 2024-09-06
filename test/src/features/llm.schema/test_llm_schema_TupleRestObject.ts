import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_llm_schema_TupleRestObject = _test_llm_schema(
  "TupleRestObject",
)(typia.llm.schema<TupleRestObject>());
