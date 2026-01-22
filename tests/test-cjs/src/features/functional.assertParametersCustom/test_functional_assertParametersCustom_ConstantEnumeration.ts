import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_assertParametersCustom_ConstantEnumeration =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("ConstantEnumeration")(
      ConstantEnumeration,
    )((p: (input: ConstantEnumeration) => ConstantEnumeration) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
