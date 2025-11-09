import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_assertParametersAsyncCustom_ObjectDate =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("ObjectDate")(
      ObjectDate,
    )((p: (input: ObjectDate) => Promise<ObjectDate>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
