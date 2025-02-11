import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_functional_assertReturnAsyncCustom_ArrayRepeatedUnion =
  _test_functional_assertReturnAsync(CustomGuardError)("ArrayRepeatedUnion")(
    ArrayRepeatedUnion,
  )((p: (input: ArrayRepeatedUnion) => Promise<ArrayRepeatedUnion>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
