import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ArrayRepeatedOptional =
  _test_functional_assertReturnAsync(TypeGuardError)("ArrayRepeatedOptional")(
    ArrayRepeatedOptional,
  )((p: (input: ArrayRepeatedOptional) => Promise<ArrayRepeatedOptional>) =>
    typia.functional.assertReturn(p),
  );
