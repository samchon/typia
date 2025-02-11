import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectDescription =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectDescription",
  )(ObjectDescription)(
    (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
