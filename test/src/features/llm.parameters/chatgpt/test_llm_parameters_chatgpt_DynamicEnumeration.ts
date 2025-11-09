import typia from "typia";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_chatgpt_DynamicEnumeration = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "DynamicEnumeration",
  })(
    typia.llm.parameters<DynamicEnumerationParameters, "chatgpt">(),
  );

interface DynamicEnumerationParameters {
  regular: DynamicEnumeration;
  nullable: DynamicEnumeration | null;
  optional: DynamicEnumeration | undefined;
  faint: DynamicEnumeration | null | undefined;
  array: Array<DynamicEnumeration>;
}