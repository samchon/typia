import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertEqualsReturnCustom_TypeTagArray =
  _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => TypeTagArray) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
