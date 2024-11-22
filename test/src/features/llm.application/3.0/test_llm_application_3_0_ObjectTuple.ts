import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_llm_application_3_0_ObjectTuple = _test_llm_application({
  model: "3.0",
  name: "ObjectTuple",
})(typia.llm.application<ObjectTupleApplication, "3.0">());

interface ObjectTupleApplication {
  insert(first: ObjectTuple): Promise<void>;
  reduce(first: ObjectTuple, second: ObjectTuple | null): Promise<ObjectTuple>;
  coalesce(
    first: ObjectTuple | null,
    second: ObjectTuple | null,
    third?: ObjectTuple | null,
  ): Promise<ObjectTuple | null>;
}
