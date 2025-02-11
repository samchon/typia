import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertEqualsReturnCustom_TypeTagPattern =
  _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => TypeTagPattern) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
