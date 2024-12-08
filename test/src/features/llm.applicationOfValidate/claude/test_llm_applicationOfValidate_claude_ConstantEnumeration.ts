import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_llm_applicationOfValidate_claude_ConstantEnumeration =
  _test_llm_applicationOfValidate({
    model: "claude",
    name: "ConstantEnumeration",
    factory: ConstantEnumeration,
  })(
    typia.llm.applicationOfValidate<ConstantEnumerationApplication, "claude">(),
  );

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
