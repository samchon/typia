import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertEqualsReturn_TypeTagRange = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("TypeTagRange")(
    TypeTagRange,
  )((p: (input: TypeTagRange) => TypeTagRange) =>
    typia.functional.assertEqualsReturn(p),
  );
