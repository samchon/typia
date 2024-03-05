import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_assertFunction_ConstantConstEnumeration =
  _test_functional_assertFunction(TypeGuardError)("ConstantConstEnumeration")(
    ConstantConstEnumeration,
  )((p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
    typia.functional.assertFunction(p),
  );
