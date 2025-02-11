import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertEqualsReturnCustom_TypeTagNaN =
  _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagNaN")(
    TypeTagNaN,
  )((p: (input: TypeTagNaN) => TypeTagNaN) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
