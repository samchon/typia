import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectGenericArray =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectGenericArray",
  )(ObjectGenericArray)(
    (p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
