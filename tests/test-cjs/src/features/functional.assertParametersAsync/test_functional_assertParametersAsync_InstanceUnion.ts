import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_assertParametersAsync_InstanceUnion =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("InstanceUnion")(
      InstanceUnion,
    )((p: (input: InstanceUnion) => Promise<InstanceUnion>) =>
      typia.functional.assertParameters(p),
    );
