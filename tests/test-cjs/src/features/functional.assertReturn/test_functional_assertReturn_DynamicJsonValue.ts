import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_assertReturn_DynamicJsonValue = (): void =>
  _test_functional_assertReturn(TypeGuardError)("DynamicJsonValue")(
    DynamicJsonValue,
  )((p: (input: DynamicJsonValue) => DynamicJsonValue) =>
    typia.functional.assertReturn(p),
  );
