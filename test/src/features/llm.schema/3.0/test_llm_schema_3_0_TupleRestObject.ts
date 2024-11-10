import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_llm_schema_3_0_TupleRestObject = _test_llm_schema({
  model: "3.0",
  name: "TupleRestObject",
})(typia.llm.schema<TupleRestObject, "3.0">());
