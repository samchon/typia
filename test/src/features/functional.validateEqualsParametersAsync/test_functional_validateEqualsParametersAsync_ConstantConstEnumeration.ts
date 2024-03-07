import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_validateEqualsParametersAsync_ConstantConstEnumeration =
  _test_functional_validateEqualsParametersAsync("ConstantConstEnumeration")(
    ConstantConstEnumeration,
  )(
    (
      p: (input: ConstantConstEnumeration) => Promise<ConstantConstEnumeration>,
    ) => typia.functional.validateEqualsParameters(p),
  );
