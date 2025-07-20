import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_validateFunctionAsync_ConstantConstEnumeration =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ConstantConstEnumeration")(
      ConstantConstEnumeration,
    )(
      (
        p: (
          input: ConstantConstEnumeration,
        ) => Promise<ConstantConstEnumeration>,
      ) => typia.functional.validateFunction(p),
    );
