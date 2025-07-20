import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_llm_applicationEquals_3_1_ConstantConstEnumeration =
  (): void =>
    _test_llm_applicationEquals({
      model: "3.1",
      name: "ConstantConstEnumeration",
      factory: ConstantConstEnumeration,
    })(
      typia.llm.application<
        ConstantConstEnumerationApplication,
        "3.1",
        { equal: true }
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
