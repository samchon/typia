import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectPartialAndRequired =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectPartialAndRequired",
  )(ObjectPartialAndRequired)(
    (
      p: (input: ObjectPartialAndRequired) => Promise<ObjectPartialAndRequired>,
    ) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
