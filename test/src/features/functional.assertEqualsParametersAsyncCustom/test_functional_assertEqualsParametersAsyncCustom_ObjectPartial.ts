import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectPartial =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "ObjectPartial",
    )(ObjectPartial)((p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
