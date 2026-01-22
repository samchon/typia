import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_assertParameters_ConstantConstEnumeration =
  (): void =>
    _test_functional_assertParameters(TypeGuardError)(
      "ConstantConstEnumeration",
    )(ConstantConstEnumeration)(
      (p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
        typia.functional.assertParameters(p),
    );
