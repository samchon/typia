import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertFunctionAsyncCustom_TypeTagType =
  _test_functional_assertFunctionAsync(CustomGuardError)("TypeTagType")(
    TypeTagType,
  )((p: (input: TypeTagType) => Promise<TypeTagType>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
