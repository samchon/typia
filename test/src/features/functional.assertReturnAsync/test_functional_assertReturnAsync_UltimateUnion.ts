import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_assertReturnAsync_UltimateUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("UltimateUnion")(
      UltimateUnion,
    )((p: (input: UltimateUnion) => Promise<UltimateUnion>) =>
      typia.functional.assertReturn(p),
    );
