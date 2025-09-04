import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertParameters_TypeTagPattern = (): void =>
  _test_functional_assertParameters(TypeGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => TypeTagPattern) =>
    typia.functional.assertParameters(p),
  );
