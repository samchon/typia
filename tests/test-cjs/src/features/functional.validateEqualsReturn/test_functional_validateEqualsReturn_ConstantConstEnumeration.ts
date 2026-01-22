import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_validateEqualsReturn_ConstantConstEnumeration =
  (): void =>
    _test_functional_validateEqualsReturn("ConstantConstEnumeration")(
      ConstantConstEnumeration,
    )((p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
      typia.functional.validateEqualsReturn(p),
    );
