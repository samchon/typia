import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertEqualsReturn_TypeTagLength =
  _test_functional_assertEqualsReturn(TypeGuardError)("TypeTagLength")(
    TypeTagLength,
  )((p: (input: TypeTagLength) => TypeTagLength) =>
    typia.functional.assertEqualsReturn(p),
  );
