import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_TypeTagNaN =
  _test_functional_assertEqualsFunction(TypeGuardError)("TypeTagNaN")(
    TypeTagNaN,
  )((p: (input: TypeTagNaN) => TypeTagNaN) =>
    typia.functional.assertEqualsFunction(p),
  );
