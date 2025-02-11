import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_equalsFunction_ConstantEnumeration =
  _test_functional_equalsFunction("ConstantEnumeration")(ConstantEnumeration)(
    (p: (input: ConstantEnumeration) => ConstantEnumeration) =>
      typia.functional.equalsFunction(p),
  );
