import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_isParametersAsync_ConstantConstEnumeration =
  _test_functional_isParametersAsync("ConstantConstEnumeration")(
    ConstantConstEnumeration,
  )(
    (
      p: (input: ConstantConstEnumeration) => Promise<ConstantConstEnumeration>,
    ) => typia.functional.isParameters(p),
  );
