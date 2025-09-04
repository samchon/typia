import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_isReturn_ToJsonTuple = (): void =>
  _test_functional_isReturn("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => ToJsonTuple) => typia.functional.isReturn(p),
  );
