import typia from "typia";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_0_ConstantEnumeration = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "ConstantEnumeration",
    factory: ConstantEnumeration
  })(
    typia.llm.application<ConstantEnumerationApplication, "3.0">(),
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