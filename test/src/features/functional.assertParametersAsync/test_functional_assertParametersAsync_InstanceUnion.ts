import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { InstanceUnion } from "../../structures/InstanceUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_InstanceUnion =
  _test_functional_assertParametersAsync(TypeGuardError)("InstanceUnion")(
    InstanceUnion,
  )((p: (input: InstanceUnion) => Promise<InstanceUnion>) =>
    typia.functional.assertParameters(p),
  );
