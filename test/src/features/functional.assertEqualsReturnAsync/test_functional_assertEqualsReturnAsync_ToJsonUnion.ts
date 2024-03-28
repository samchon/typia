import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertEqualsReturnAsync_ToJsonUnion =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ToJsonUnion")(
    ToJsonUnion,
  )((p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
    typia.functional.assertEqualsReturn(p),
  );
