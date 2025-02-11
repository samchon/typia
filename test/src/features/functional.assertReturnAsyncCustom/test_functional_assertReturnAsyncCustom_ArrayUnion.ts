import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertReturnAsyncCustom_ArrayUnion =
  _test_functional_assertReturnAsync(CustomGuardError)("ArrayUnion")(
    ArrayUnion,
  )((p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
