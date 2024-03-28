import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_assertEqualsFunctionCustom_ConstantConstEnumeration =
  _test_functional_assertEqualsFunction(CustomGuardError)(
    "ConstantConstEnumeration",
  )(ConstantConstEnumeration)(
    (p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
