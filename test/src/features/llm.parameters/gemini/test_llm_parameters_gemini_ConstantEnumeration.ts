import typia from "typia";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_ConstantEnumeration = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ConstantEnumeration",
  })(
    typia.llm.parameters<ConstantEnumerationParameters, "gemini">(),
  );

interface ConstantEnumerationParameters {
  regular: ConstantEnumeration;
  nullable: ConstantEnumeration | null;
  optional: ConstantEnumeration | undefined;
  faint: ConstantEnumeration | null | undefined;
  array: Array<ConstantEnumeration>;
}