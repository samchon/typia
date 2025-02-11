import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_assertFunction_DynamicJsonValue =
  _test_functional_assertFunction(TypeGuardError)("DynamicJsonValue")(
    DynamicJsonValue,
  )((p: (input: DynamicJsonValue) => DynamicJsonValue) =>
    typia.functional.assertFunction(p),
  );
