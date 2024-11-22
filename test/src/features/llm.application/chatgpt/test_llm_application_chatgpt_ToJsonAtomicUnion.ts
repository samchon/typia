import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_llm_application_chatgpt_ToJsonAtomicUnion =
  _test_llm_application({
    model: "chatgpt",
    name: "ToJsonAtomicUnion",
  })(typia.llm.application<ToJsonAtomicUnionApplication, "chatgpt">());

interface ToJsonAtomicUnionApplication {
  insert(first: ToJsonAtomicUnion): Promise<void>;
  reduce(
    first: ToJsonAtomicUnion,
    second: ToJsonAtomicUnion | null,
  ): Promise<ToJsonAtomicUnion>;
  coalesce(
    first: ToJsonAtomicUnion | null,
    second: ToJsonAtomicUnion | null,
    third?: ToJsonAtomicUnion | null,
  ): Promise<ToJsonAtomicUnion | null>;
}
