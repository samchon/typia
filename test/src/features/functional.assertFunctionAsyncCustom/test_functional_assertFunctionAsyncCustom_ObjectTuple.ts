import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ObjectTuple =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectTuple")(
    ObjectTuple,
  )((p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
