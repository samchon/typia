import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertFunction_TypeTagPattern = (): void =>
  _test_functional_assertFunction(TypeGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => TypeTagPattern) =>
    typia.functional.assertFunction(p),
  );
