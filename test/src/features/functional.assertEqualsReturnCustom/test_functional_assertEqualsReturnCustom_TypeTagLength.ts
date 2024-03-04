import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertEqualsReturnCustom_TypeTagLength =
  _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagLength")(
    TypeTagLength,
  )((p: (input: TypeTagLength) => TypeTagLength) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
