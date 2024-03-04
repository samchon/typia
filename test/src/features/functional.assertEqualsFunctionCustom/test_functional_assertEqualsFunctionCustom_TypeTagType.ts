import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertEqualsFunctionCustom_TypeTagType =
  _test_functional_assertEqualsFunction(CustomGuardError)("TypeTagType")(
    TypeTagType,
  )((p: (input: TypeTagType) => TypeTagType) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
