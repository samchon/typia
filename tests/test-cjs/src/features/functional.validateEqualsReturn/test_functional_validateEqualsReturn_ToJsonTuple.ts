import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_validateEqualsReturn_ToJsonTuple = (): void =>
  _test_functional_validateEqualsReturn("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => ToJsonTuple) =>
      typia.functional.validateEqualsReturn(p),
  );
