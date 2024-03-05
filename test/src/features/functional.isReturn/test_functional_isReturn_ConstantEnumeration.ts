import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_isReturn_ConstantEnumeration =
  _test_functional_isReturn("ConstantEnumeration")(ConstantEnumeration)(
    (p: (input: ConstantEnumeration) => ConstantEnumeration) =>
      typia.functional.isReturn(p),
  );
