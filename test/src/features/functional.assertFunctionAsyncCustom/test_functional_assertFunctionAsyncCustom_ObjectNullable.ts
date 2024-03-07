import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ObjectNullable =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectNullable")(
    ObjectNullable,
  )((p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
