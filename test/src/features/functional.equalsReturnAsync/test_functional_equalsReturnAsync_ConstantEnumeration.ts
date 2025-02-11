import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_equalsReturnAsync_ConstantEnumeration =
  _test_functional_equalsReturnAsync("ConstantEnumeration")(
    ConstantEnumeration,
  )((p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
    typia.functional.equalsReturn(p),
  );
