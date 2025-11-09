import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_assertParametersAsync_SetUnion =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("SetUnion")(
      SetUnion,
    )((p: (input: SetUnion) => Promise<SetUnion>) =>
      typia.functional.assertParameters(p),
    );
