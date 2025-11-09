import typia from "typia";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_ConstantAtomicTagged = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ConstantAtomicTagged",
  })(
    typia.llm.parameters<ConstantAtomicTaggedParameters, "claude">(),
  );

interface ConstantAtomicTaggedParameters {
  regular: ConstantAtomicTagged;
  nullable: ConstantAtomicTagged | null;
  optional: ConstantAtomicTagged | undefined;
  faint: ConstantAtomicTagged | null | undefined;
  array: Array<ConstantAtomicTagged>;
}