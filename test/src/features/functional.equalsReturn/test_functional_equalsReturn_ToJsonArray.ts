import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_equalsReturn_ToJsonArray = (): void =>
  _test_functional_equalsReturn("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => ToJsonArray) =>
      typia.functional.equalsReturn(p),
  );
