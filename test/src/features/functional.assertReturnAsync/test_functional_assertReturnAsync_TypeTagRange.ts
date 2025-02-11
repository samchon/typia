import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertReturnAsync_TypeTagRange =
  _test_functional_assertReturnAsync(TypeGuardError)("TypeTagRange")(
    TypeTagRange,
  )((p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
    typia.functional.assertReturn(p),
  );
