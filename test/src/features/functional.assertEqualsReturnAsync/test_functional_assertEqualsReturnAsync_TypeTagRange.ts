import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertEqualsReturnAsync_TypeTagRange =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("TypeTagRange")(
    TypeTagRange,
  )((p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
    typia.functional.assertEqualsReturn(p),
  );
