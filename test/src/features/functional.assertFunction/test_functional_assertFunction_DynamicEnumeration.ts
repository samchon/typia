import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_assertFunction_DynamicEnumeration =
  _test_functional_assertFunction(TypeGuardError)("DynamicEnumeration")(
    DynamicEnumeration,
  )((p: (input: DynamicEnumeration) => DynamicEnumeration) =>
    typia.functional.assertFunction(p),
  );
