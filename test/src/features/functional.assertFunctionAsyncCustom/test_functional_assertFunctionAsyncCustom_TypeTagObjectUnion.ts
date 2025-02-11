import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_assertFunctionAsyncCustom_TypeTagObjectUnion =
  _test_functional_assertFunctionAsync(CustomGuardError)("TypeTagObjectUnion")(
    TypeTagObjectUnion,
  )((p: (input: TypeTagObjectUnion) => Promise<TypeTagObjectUnion>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
