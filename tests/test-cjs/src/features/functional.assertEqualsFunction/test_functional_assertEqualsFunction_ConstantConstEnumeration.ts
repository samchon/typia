import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_assertEqualsFunction_ConstantConstEnumeration =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)(
      "ConstantConstEnumeration",
    )(ConstantConstEnumeration)(
      (p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
        typia.functional.assertEqualsFunction(p),
    );
