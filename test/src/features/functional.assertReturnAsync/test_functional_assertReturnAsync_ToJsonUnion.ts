import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertReturnAsync_ToJsonUnion =
  _test_functional_assertReturnAsync(TypeGuardError)("ToJsonUnion")(
    ToJsonUnion,
  )((p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
    typia.functional.assertReturn(p),
  );
