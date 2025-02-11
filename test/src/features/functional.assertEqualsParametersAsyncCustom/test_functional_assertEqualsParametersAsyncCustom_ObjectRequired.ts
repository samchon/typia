import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectRequired =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectRequired",
  )(ObjectRequired)((p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
