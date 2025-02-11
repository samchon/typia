import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_isParametersAsync_ConstantEnumeration =
  _test_functional_isParametersAsync("ConstantEnumeration")(
    ConstantEnumeration,
  )((p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
    typia.functional.isParameters(p),
  );
