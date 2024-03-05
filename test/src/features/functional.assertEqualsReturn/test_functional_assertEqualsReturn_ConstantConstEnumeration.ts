import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_assertEqualsReturn_ConstantConstEnumeration =
  _test_functional_assertEqualsReturn(TypeGuardError)(
    "ConstantConstEnumeration",
  )(ConstantConstEnumeration)(
    (p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
      typia.functional.assertEqualsReturn(p),
  );
