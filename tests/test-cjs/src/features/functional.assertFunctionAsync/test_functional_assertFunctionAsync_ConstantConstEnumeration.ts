import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_assertFunctionAsync_ConstantConstEnumeration =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)(
      "ConstantConstEnumeration",
    )(ConstantConstEnumeration)(
      (
        p: (
          input: ConstantConstEnumeration,
        ) => Promise<ConstantConstEnumeration>,
      ) => typia.functional.assertFunction(p),
    );
