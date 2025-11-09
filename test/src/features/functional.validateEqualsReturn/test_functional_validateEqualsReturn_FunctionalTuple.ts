import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_validateEqualsReturn_FunctionalTuple = (): void =>
  _test_functional_validateEqualsReturn("FunctionalTuple")(FunctionalTuple)(
    (p: (input: FunctionalTuple) => FunctionalTuple) =>
      typia.functional.validateEqualsReturn(p),
  );
