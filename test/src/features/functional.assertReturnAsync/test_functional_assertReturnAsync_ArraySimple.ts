import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertReturnAsync_ArraySimple =
  _test_functional_assertReturnAsync(TypeGuardError)("ArraySimple")(
    ArraySimple,
  )((p: (input: ArraySimple) => Promise<ArraySimple>) =>
    typia.functional.assertReturn(p),
  );
