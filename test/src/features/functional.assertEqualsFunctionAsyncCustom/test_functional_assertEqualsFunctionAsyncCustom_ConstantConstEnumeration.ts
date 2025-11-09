import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_assertEqualsFunctionAsyncCustom_ConstantConstEnumeration =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "ConstantConstEnumeration",
    )(ConstantConstEnumeration)(
      (
        p: (
          input: ConstantConstEnumeration,
        ) => Promise<ConstantConstEnumeration>,
      ) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
