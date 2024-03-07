import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectPrimitive =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectPrimitive",
  )(ObjectPrimitive)(
    (p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
