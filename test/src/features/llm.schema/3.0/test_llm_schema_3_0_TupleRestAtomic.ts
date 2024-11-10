import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_llm_schema_3_0_TupleRestAtomic = _test_llm_schema({
  model: "3.0",
  name: "TupleRestAtomic",
})(typia.llm.schema<TupleRestAtomic, "3.0">());
