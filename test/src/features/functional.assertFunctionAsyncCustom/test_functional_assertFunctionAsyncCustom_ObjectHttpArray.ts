import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_assertFunctionAsyncCustom_ObjectHttpArray =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectHttpArray")(
    ObjectHttpArray,
  )((p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
