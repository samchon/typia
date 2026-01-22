import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertReturnAsync_ArrayUnion = (): Promise<void> =>
  _test_functional_assertReturnAsync(TypeGuardError)("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
      typia.functional.assertReturn(p),
  );
