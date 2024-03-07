import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectGenericArray =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectGenericArray",
  )(ObjectGenericArray)(
    (p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
