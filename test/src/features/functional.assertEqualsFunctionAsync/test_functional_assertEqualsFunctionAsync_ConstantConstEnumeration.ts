import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ConstantConstEnumeration =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "ConstantConstEnumeration",
  )(ConstantConstEnumeration)(
    (
      p: (input: ConstantConstEnumeration) => Promise<ConstantConstEnumeration>,
    ) => typia.functional.assertEqualsFunction(p),
  );
