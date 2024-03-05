import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertReturn_TypeTagPattern =
  _test_functional_assertReturn(TypeGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => TypeTagPattern) =>
    typia.functional.assertReturn(p),
  );
