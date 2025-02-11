import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_functional_assertReturnAsync_ArrayRepeatedOptional =
  _test_functional_assertReturnAsync(TypeGuardError)("ArrayRepeatedOptional")(
    ArrayRepeatedOptional,
  )((p: (input: ArrayRepeatedOptional) => Promise<ArrayRepeatedOptional>) =>
    typia.functional.assertReturn(p),
  );
