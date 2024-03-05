import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_assertReturnCustom_InstanceUnion =
  _test_functional_assertReturn(CustomGuardError)("InstanceUnion")(
    InstanceUnion,
  )((p: (input: InstanceUnion) => InstanceUnion) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
