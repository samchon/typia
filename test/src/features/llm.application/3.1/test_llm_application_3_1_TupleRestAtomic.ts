import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_llm_application_3_1_TupleRestAtomic = _test_llm_application({
  model: "3.1",
  name: "TupleRestAtomic",
})(typia.llm.application<TupleRestAtomicApplication, "3.1">());

interface TupleRestAtomicApplication {
  insert(first: TupleRestAtomic): Promise<void>;
  reduce(
    first: TupleRestAtomic,
    second: TupleRestAtomic | null,
  ): Promise<TupleRestAtomic>;
  coalesce(
    first: TupleRestAtomic | null,
    second: TupleRestAtomic | null,
    third?: TupleRestAtomic | null,
  ): Promise<TupleRestAtomic | null>;
}
