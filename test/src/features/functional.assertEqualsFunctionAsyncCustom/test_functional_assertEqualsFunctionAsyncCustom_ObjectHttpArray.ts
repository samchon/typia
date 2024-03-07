import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectHttpArray =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectHttpArray",
  )(ObjectHttpArray)(
    (p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
