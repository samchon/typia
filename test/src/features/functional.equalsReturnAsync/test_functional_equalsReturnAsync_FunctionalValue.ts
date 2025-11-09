import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_equalsReturnAsync_FunctionalValue =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("FunctionalValue")(FunctionalValue)(
      (p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
        typia.functional.equalsReturn(p),
    );
