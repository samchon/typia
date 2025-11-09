import typia from "typia";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_DynamicEnumeration = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "DynamicEnumeration",
  })(
    typia.llm.parameters<DynamicEnumerationParameters, "claude">(),
  );

interface DynamicEnumerationParameters {
  regular: DynamicEnumeration;
  nullable: DynamicEnumeration | null;
  optional: DynamicEnumeration | undefined;
  faint: DynamicEnumeration | null | undefined;
  array: Array<DynamicEnumeration>;
}