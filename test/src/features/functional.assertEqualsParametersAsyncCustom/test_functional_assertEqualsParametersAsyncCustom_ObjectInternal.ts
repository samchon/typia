import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectInternal =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "ObjectInternal",
    )(ObjectInternal)((p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
