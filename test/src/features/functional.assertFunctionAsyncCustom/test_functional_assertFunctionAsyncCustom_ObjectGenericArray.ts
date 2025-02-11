import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertFunctionAsyncCustom_ObjectGenericArray =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectGenericArray")(
    ObjectGenericArray,
  )((p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
