import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertFunctionCustom_TypeTagType = (): void =>
  _test_functional_assertFunction(CustomGuardError)("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => TypeTagType) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
