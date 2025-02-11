import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertFunctionAsyncCustom_TypeTagTuple =
  _test_functional_assertFunctionAsync(CustomGuardError)("TypeTagTuple")(
    TypeTagTuple,
  )((p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
