import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_assertFunction_DynamicUndefined = (): void =>
  _test_functional_assertFunction(TypeGuardError)("DynamicUndefined")(
    DynamicUndefined,
  )((p: (input: DynamicUndefined) => DynamicUndefined) =>
    typia.functional.assertFunction(p),
  );
