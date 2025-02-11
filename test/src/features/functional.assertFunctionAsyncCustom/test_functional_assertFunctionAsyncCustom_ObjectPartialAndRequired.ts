import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_assertFunctionAsyncCustom_ObjectPartialAndRequired =
  _test_functional_assertFunctionAsync(CustomGuardError)(
    "ObjectPartialAndRequired",
  )(ObjectPartialAndRequired)(
    (
      p: (input: ObjectPartialAndRequired) => Promise<ObjectPartialAndRequired>,
    ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
