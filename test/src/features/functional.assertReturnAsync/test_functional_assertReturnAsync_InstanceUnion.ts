import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_assertReturnAsync_InstanceUnion =
  _test_functional_assertReturnAsync(TypeGuardError)("InstanceUnion")(
    InstanceUnion,
  )((p: (input: InstanceUnion) => Promise<InstanceUnion>) =>
    typia.functional.assertReturn(p),
  );
