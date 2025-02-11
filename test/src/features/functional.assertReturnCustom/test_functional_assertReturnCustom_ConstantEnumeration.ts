import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_assertReturnCustom_ConstantEnumeration =
  _test_functional_assertReturn(CustomGuardError)("ConstantEnumeration")(
    ConstantEnumeration,
  )((p: (input: ConstantEnumeration) => ConstantEnumeration) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
