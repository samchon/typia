import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectUndefined =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "ObjectUndefined",
    )(ObjectUndefined)(
      (p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
