import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertParametersAsyncCustom_ObjectSimple =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("ObjectSimple")(
      ObjectSimple,
    )((p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
