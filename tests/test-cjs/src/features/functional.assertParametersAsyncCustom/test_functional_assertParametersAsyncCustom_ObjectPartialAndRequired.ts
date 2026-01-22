import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_assertParametersAsyncCustom_ObjectPartialAndRequired =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "ObjectPartialAndRequired",
    )(ObjectPartialAndRequired)(
      (
        p: (
          input: ObjectPartialAndRequired,
        ) => Promise<ObjectPartialAndRequired>,
      ) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
