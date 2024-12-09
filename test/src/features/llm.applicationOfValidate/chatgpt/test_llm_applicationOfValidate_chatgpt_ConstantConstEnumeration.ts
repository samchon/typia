import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_llm_applicationOfValidate_chatgpt_ConstantConstEnumeration =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "ConstantConstEnumeration",
    factory: ConstantConstEnumeration,
  })(
    typia.llm.applicationOfValidate<
      ConstantConstEnumerationApplication,
      "chatgpt"
    >(),
  );

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
