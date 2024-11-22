import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_llm_application_3_0_TypeTagTuple = _test_llm_application({
  model: "3.0",
  name: "TypeTagTuple",
})(typia.llm.application<TypeTagTupleApplication, "3.0">());

interface TypeTagTupleApplication {
  insert(first: TypeTagTuple): Promise<void>;
  reduce(
    first: TypeTagTuple,
    second: TypeTagTuple | null,
  ): Promise<TypeTagTuple>;
  coalesce(
    first: TypeTagTuple | null,
    second: TypeTagTuple | null,
    third?: TypeTagTuple | null,
  ): Promise<TypeTagTuple | null>;
}
