import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_llm_application_3_1_TupleRestArray = _test_llm_application({
  model: "3.1",
  name: "TupleRestArray",
})(typia.llm.application<TupleRestArrayApplication, "3.1">());

interface TupleRestArrayApplication {
  insert(first: TupleRestArray): Promise<void>;
  reduce(
    first: TupleRestArray,
    second: TupleRestArray | null,
  ): Promise<TupleRestArray>;
  coalesce(
    first: TupleRestArray | null,
    second: TupleRestArray | null,
    third?: TupleRestArray | null,
  ): Promise<TupleRestArray | null>;
}
