import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_assertFunctionAsyncCustom_InstanceUnion =
  _test_functional_assertFunctionAsync(CustomGuardError)("InstanceUnion")(
    InstanceUnion,
  )((p: (input: InstanceUnion) => Promise<InstanceUnion>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
