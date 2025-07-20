import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_isFunctionAsync_ConstantEnumeration =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("ConstantEnumeration")(
      ConstantEnumeration,
    )((p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
      typia.functional.isFunction(p),
    );
