import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_TypeTagPattern =
  _test_functional_assertEqualsFunction(TypeGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => TypeTagPattern) =>
    typia.functional.assertEqualsFunction(p),
  );
