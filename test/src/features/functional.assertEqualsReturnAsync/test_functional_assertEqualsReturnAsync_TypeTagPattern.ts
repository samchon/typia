import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertEqualsReturnAsync_TypeTagPattern =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
    typia.functional.assertEqualsReturn(p),
  );
