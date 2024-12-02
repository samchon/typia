import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_llm_application_chatgpt_ConstantAtomicUnion =
  _test_llm_application({
    model: "chatgpt",
    name: "ConstantAtomicUnion",
  })(typia.llm.application<ConstantAtomicUnionApplication, "chatgpt">());

interface ConstantAtomicUnionApplication {
  insert(p: { first: ConstantAtomicUnion }): Promise<void>;
  reduce(p: {
    first: ConstantAtomicUnion;
    second: ConstantAtomicUnion | null;
  }): Promise<ConstantAtomicUnion>;
  coalesce(p: {
    first: ConstantAtomicUnion | null;
    second: ConstantAtomicUnion | null;
    third?: ConstantAtomicUnion | null;
  }): Promise<ConstantAtomicUnion | null>;
}
