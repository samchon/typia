import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_validateReturnAsync_UltimateUnion =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("UltimateUnion")(UltimateUnion)(
      (p: (input: UltimateUnion) => Promise<UltimateUnion>) =>
        typia.functional.validateReturn(p),
    );
