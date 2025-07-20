import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertParametersAsyncCustom_ObjectPartial =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("ObjectPartial")(
      ObjectPartial,
    )((p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
