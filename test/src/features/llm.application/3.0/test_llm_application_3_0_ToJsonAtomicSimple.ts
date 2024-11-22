import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_llm_application_3_0_ToJsonAtomicSimple =
  _test_llm_application({
    model: "3.0",
    name: "ToJsonAtomicSimple",
  })(typia.llm.application<ToJsonAtomicSimpleApplication, "3.0">());

interface ToJsonAtomicSimpleApplication {
  insert(first: ToJsonAtomicSimple): Promise<void>;
  reduce(
    first: ToJsonAtomicSimple,
    second: ToJsonAtomicSimple | null,
  ): Promise<ToJsonAtomicSimple>;
  coalesce(
    first: ToJsonAtomicSimple | null,
    second: ToJsonAtomicSimple | null,
    third?: ToJsonAtomicSimple | null,
  ): Promise<ToJsonAtomicSimple | null>;
}
