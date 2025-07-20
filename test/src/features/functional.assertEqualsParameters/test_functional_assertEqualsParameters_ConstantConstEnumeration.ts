import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_assertEqualsParameters_ConstantConstEnumeration =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "ConstantConstEnumeration",
    )(ConstantConstEnumeration)(
      (p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
        typia.functional.assertEqualsParameters(p),
    );
