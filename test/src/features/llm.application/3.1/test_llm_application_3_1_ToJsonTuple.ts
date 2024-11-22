import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_llm_application_3_1_ToJsonTuple = _test_llm_application({
  model: "3.1",
  name: "ToJsonTuple",
})(typia.llm.application<ToJsonTupleApplication, "3.1">());

interface ToJsonTupleApplication {
  insert(first: ToJsonTuple): Promise<void>;
  reduce(first: ToJsonTuple, second: ToJsonTuple | null): Promise<ToJsonTuple>;
  coalesce(
    first: ToJsonTuple | null,
    second: ToJsonTuple | null,
    third?: ToJsonTuple | null,
  ): Promise<ToJsonTuple | null>;
}
