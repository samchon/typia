import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertEqualsReturnCustom_TypeTagRange =
  _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagRange")(
    TypeTagRange,
  )((p: (input: TypeTagRange) => TypeTagRange) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
