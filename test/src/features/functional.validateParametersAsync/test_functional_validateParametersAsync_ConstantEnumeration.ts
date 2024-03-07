import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_validateParametersAsync_ConstantEnumeration =
  _test_functional_validateParametersAsync("ConstantEnumeration")(
    ConstantEnumeration,
  )((p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
    typia.functional.validateParameters(p),
  );
