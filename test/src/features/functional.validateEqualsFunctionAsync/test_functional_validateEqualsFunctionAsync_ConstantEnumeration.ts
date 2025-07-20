import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_validateEqualsFunctionAsync_ConstantEnumeration =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ConstantEnumeration")(
      ConstantEnumeration,
    )((p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
      typia.functional.validateEqualsFunction(p),
    );
