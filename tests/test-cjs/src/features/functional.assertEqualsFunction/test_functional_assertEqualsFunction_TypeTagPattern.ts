import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertEqualsFunction_TypeTagPattern = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => TypeTagPattern) =>
    typia.functional.assertEqualsFunction(p),
  );
