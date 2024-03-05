import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_assertEqualsReturnCustom_TypeTagCustom =
  _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagCustom")(
    TypeTagCustom,
  )((p: (input: TypeTagCustom) => TypeTagCustom) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
