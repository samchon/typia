import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_llm_application_3_1_ArrayAtomicSimple = _test_llm_application(
  {
    model: "3.1",
    name: "ArrayAtomicSimple",
  },
)(typia.llm.application<ArrayAtomicSimpleApplication, "3.1">());

interface ArrayAtomicSimpleApplication {
  insert(first: ArrayAtomicSimple): Promise<void>;
  reduce(
    first: ArrayAtomicSimple,
    second: ArrayAtomicSimple | null,
  ): Promise<ArrayAtomicSimple>;
  coalesce(
    first: ArrayAtomicSimple | null,
    second: ArrayAtomicSimple | null,
    third?: ArrayAtomicSimple | null,
  ): Promise<ArrayAtomicSimple | null>;
}
