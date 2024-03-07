import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_validateEqualsReturnAsync_ConstantEnumeration =
  _test_functional_validateEqualsReturnAsync("ConstantEnumeration")(
    ConstantEnumeration,
  )((p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
    typia.functional.validateEqualsReturn(p),
  );
