import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_validateEqualsFunction_ConstantEnumeration =
  _test_functional_validateEqualsFunction("ConstantEnumeration")(
    ConstantEnumeration,
  )((p: (input: ConstantEnumeration) => ConstantEnumeration) =>
    typia.functional.validateEqualsFunction(p),
  );
