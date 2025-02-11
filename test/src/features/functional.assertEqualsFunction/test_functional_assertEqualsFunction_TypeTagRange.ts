import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertEqualsFunction_TypeTagRange =
  _test_functional_assertEqualsFunction(TypeGuardError)("TypeTagRange")(
    TypeTagRange,
  )((p: (input: TypeTagRange) => TypeTagRange) =>
    typia.functional.assertEqualsFunction(p),
  );
