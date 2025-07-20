import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_llm_parameters_chatgpt_ToJsonAtomicUnion = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "ToJsonAtomicUnion",
  })(typia.llm.parameters<ToJsonAtomicUnionParameters, "chatgpt">());

interface ToJsonAtomicUnionParameters {
  regular: ToJsonAtomicUnion;
  nullable: ToJsonAtomicUnion | null;
  optional: ToJsonAtomicUnion | undefined;
  faint: ToJsonAtomicUnion | null | undefined;
  array: Array<ToJsonAtomicUnion>;
}
