import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertEqualsReturnCustom_TypeTagType = (): void =>
  _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagType")(
    TypeTagType,
  )((p: (input: TypeTagType) => TypeTagType) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
