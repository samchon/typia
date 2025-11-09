import typia from "typia";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_claude_ConstantEnumeration = (): void =>
  _test_llm_application({
    model: "claude",
    name: "ConstantEnumeration",
    factory: ConstantEnumeration
  })(
    typia.llm.application<ConstantEnumerationApplication, "claude">(),
  );

interface ConstantEnumerationApplication {
  insert(p: { first: ConstantEnumeration }): Promise<void>;
  reduce(p: { first: ConstantEnumeration, second: ConstantEnumeration | null }): Promise<ConstantEnumeration>;
  coalesce(p: {
    first: ConstantEnumeration | null,
    second: ConstantEnumeration | null,
    third?: ConstantEnumeration | null,
  }): Promise<ConstantEnumeration | null>;
}