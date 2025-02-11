import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_equalsFunctionAsync_ConstantConstEnumeration =
  _test_functional_equalsFunctionAsync("ConstantConstEnumeration")(
    ConstantConstEnumeration,
  )(
    (
      p: (input: ConstantConstEnumeration) => Promise<ConstantConstEnumeration>,
    ) => typia.functional.equalsFunction(p),
  );
