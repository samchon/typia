import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_llm_parameters_claude_AtomicUnion = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "AtomicUnion",
  })(typia.llm.parameters<AtomicUnionParameters, "claude">());

interface AtomicUnionParameters {
  regular: AtomicUnion;
  nullable: AtomicUnion | null;
  optional: AtomicUnion | undefined;
  faint: AtomicUnion | null | undefined;
  array: Array<AtomicUnion>;
}
