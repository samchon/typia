import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_llm_applicationOfValidate_3_0_ConstantConstEnumeration =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "ConstantConstEnumeration",
    factory: ConstantConstEnumeration,
  })(
    typia.llm.applicationOfValidate<
      ConstantConstEnumerationApplication,
      "3.0"
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
