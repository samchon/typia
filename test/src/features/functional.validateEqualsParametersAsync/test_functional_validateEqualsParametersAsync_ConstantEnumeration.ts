import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_validateEqualsParametersAsync_ConstantEnumeration =
  _test_functional_validateEqualsParametersAsync("ConstantEnumeration")(
    ConstantEnumeration,
  )((p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
    typia.functional.validateEqualsParameters(p),
  );
