import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_assertReturnAsync_DynamicJsonValue =
  _test_functional_assertReturnAsync(TypeGuardError)("DynamicJsonValue")(
    DynamicJsonValue,
  )((p: (input: DynamicJsonValue) => Promise<DynamicJsonValue>) =>
    typia.functional.assertReturn(p),
  );
