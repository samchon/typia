import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_llm_application_gemini_ConstantConstEnumeration = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "ConstantConstEnumeration",
    factory: ConstantConstEnumeration,
  })(typia.llm.application<ConstantConstEnumerationApplication, "gemini">());

interface ConstantConstEnumerationApplication {
  insert(p: { first: ConstantConstEnumeration }): Promise<void>;
  reduce(p: {
    first: ConstantConstEnumeration;
    second: ConstantConstEnumeration | null;
  }): Promise<ConstantConstEnumeration>;
  coalesce(p: {
    first: ConstantConstEnumeration | null;
    second: ConstantConstEnumeration | null;
    third?: ConstantConstEnumeration | null;
  }): Promise<ConstantConstEnumeration | null>;
}
