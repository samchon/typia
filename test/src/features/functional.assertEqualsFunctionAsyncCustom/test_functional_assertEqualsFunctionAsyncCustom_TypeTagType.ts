import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagType =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)("TypeTagType")(
      TypeTagType,
    )((p: (input: TypeTagType) => Promise<TypeTagType>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
