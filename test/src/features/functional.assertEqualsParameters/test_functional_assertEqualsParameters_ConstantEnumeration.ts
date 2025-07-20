import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_assertEqualsParameters_ConstantEnumeration =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "ConstantEnumeration",
    )(ConstantEnumeration)(
      (p: (input: ConstantEnumeration) => ConstantEnumeration) =>
        typia.functional.assertEqualsParameters(p),
    );
