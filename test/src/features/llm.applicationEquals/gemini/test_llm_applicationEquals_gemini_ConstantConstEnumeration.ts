import typia from "typia";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_gemini_ConstantConstEnumeration = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "ConstantConstEnumeration",
    factory: ConstantConstEnumeration
  })(
    typia.llm.application<ConstantConstEnumerationApplication, "gemini", { equals: true }>(),
  );

interface ConstantConstEnumerationApplication {
  insert(p: { first: ConstantConstEnumeration }): Promise<void>;
  reduce(p: { first: ConstantConstEnumeration, second: ConstantConstEnumeration | null }): Promise<ConstantConstEnumeration>;
  coalesce(p: {
    first: ConstantConstEnumeration | null,
    second: ConstantConstEnumeration | null,
    third?: ConstantConstEnumeration | null,
  }): Promise<ConstantConstEnumeration | null>;
}