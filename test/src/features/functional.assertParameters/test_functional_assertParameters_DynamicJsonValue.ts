import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_assertParameters_DynamicJsonValue = (): void =>
  _test_functional_assertParameters(TypeGuardError)("DynamicJsonValue")(
    DynamicJsonValue,
  )((p: (input: DynamicJsonValue) => DynamicJsonValue) =>
    typia.functional.assertParameters(p),
  );
