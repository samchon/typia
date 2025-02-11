import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectPartialAndRequired =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectPartialAndRequired",
  )(ObjectPartialAndRequired)(
    (
      p: (input: ObjectPartialAndRequired) => Promise<ObjectPartialAndRequired>,
    ) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
