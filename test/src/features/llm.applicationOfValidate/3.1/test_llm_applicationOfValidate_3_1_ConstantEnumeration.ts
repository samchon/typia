import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_llm_applicationOfValidate_3_1_ConstantEnumeration =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "ConstantEnumeration",
    factory: ConstantEnumeration,
  })(typia.llm.applicationOfValidate<ConstantEnumerationApplication, "3.1">());

interface ConstantEnumerationApplication {
  insert(p: { first: ConstantEnumeration }): Promise<void>;
  reduce(p: {
    first: ConstantEnumeration;
    second: ConstantEnumeration | null;
  }): Promise<ConstantEnumeration>;
  coalesce(p: {
    first: ConstantEnumeration | null;
    second: ConstantEnumeration | null;
    third?: ConstantEnumeration | null;
  }): Promise<ConstantEnumeration | null>;
}
