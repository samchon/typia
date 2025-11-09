import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_assertParametersAsyncCustom_ObjectDynamic =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("ObjectDynamic")(
      ObjectDynamic,
    )((p: (input: ObjectDynamic) => Promise<ObjectDynamic>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
