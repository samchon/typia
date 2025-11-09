import typia from "typia";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_chatgpt_ConstantAtomicAbsorbed = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "ConstantAtomicAbsorbed",
  })(
    typia.llm.parameters<ConstantAtomicAbsorbedParameters, "chatgpt">(),
  );

interface ConstantAtomicAbsorbedParameters {
  regular: ConstantAtomicAbsorbed;
  nullable: ConstantAtomicAbsorbed | null;
  optional: ConstantAtomicAbsorbed | undefined;
  faint: ConstantAtomicAbsorbed | null | undefined;
  array: Array<ConstantAtomicAbsorbed>;
}