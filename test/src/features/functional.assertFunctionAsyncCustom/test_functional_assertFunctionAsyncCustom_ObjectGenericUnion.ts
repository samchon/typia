import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ObjectGenericUnion =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectGenericUnion")(
    ObjectGenericUnion,
  )((p: (input: ObjectGenericUnion) => Promise<ObjectGenericUnion>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
