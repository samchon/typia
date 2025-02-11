import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertReturnAsync_TypeTagPattern =
  _test_functional_assertReturnAsync(TypeGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
    typia.functional.assertReturn(p),
  );
