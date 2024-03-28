import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_assertParametersCustom_InstanceUnion =
  _test_functional_assertParameters(CustomGuardError)("InstanceUnion")(
    InstanceUnion,
  )((p: (input: InstanceUnion) => InstanceUnion) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
