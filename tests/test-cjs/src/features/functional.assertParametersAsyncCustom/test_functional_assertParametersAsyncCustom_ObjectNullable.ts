import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertParametersAsyncCustom_ObjectNullable =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("ObjectNullable")(
      ObjectNullable,
    )((p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
