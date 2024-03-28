import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_assertFunctionAsyncCustom_ObjectPrimitive =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectPrimitive")(
    ObjectPrimitive,
  )((p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
