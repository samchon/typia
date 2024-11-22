import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_llm_application_3_0_TupleRestObject = _test_llm_application({
  model: "3.0",
  name: "TupleRestObject",
})(typia.llm.application<TupleRestObjectApplication, "3.0">());

interface TupleRestObjectApplication {
  insert(first: TupleRestObject): Promise<void>;
  reduce(
    first: TupleRestObject,
    second: TupleRestObject | null,
  ): Promise<TupleRestObject>;
  coalesce(
    first: TupleRestObject | null,
    second: TupleRestObject | null,
    third?: TupleRestObject | null,
  ): Promise<TupleRestObject | null>;
}
