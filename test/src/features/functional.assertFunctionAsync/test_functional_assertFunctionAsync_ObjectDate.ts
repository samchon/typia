import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_assertFunctionAsync_ObjectDate =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ObjectDate")(
      ObjectDate,
    )((p: (input: ObjectDate) => Promise<ObjectDate>) =>
      typia.functional.assertFunction(p),
    );
