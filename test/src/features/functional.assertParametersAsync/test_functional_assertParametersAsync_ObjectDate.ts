import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_assertParametersAsync_ObjectDate =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("ObjectDate")(
      ObjectDate,
    )((p: (input: ObjectDate) => Promise<ObjectDate>) =>
      typia.functional.assertParameters(p),
    );
