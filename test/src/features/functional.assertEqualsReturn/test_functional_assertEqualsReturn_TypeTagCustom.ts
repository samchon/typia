import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_assertEqualsReturn_TypeTagCustom =
  _test_functional_assertEqualsReturn(TypeGuardError)("TypeTagCustom")(
    TypeTagCustom,
  )((p: (input: TypeTagCustom) => TypeTagCustom) =>
    typia.functional.assertEqualsReturn(p),
  );
