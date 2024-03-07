import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ObjectGenericArray =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectGenericArray")(
    ObjectGenericArray,
  )((p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
