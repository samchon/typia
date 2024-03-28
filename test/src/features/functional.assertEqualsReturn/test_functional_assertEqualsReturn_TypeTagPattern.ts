import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertEqualsReturn_TypeTagPattern =
  _test_functional_assertEqualsReturn(TypeGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => TypeTagPattern) =>
    typia.functional.assertEqualsReturn(p),
  );
